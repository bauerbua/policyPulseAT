
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { Gesetzgebungsperiode, Gremium, Regierungen, Thema } from 'src/app/api/api-filter-dimensions';
import { ApiFacade } from 'src/app/api/api.facade.service';
import { Fraktion, Gegenstand, regierungsPerioden } from '../../api/api-filter-dimensions';
import { FilterRequestBody } from '../../api/api-filter.interface';
import { FilterGroups, TranslateEnumPipe } from './translateEnum.pipe';
import { MultiSelectInputComponent } from '../../shared/multi-select-input/multi-select-input.component';

@Component({
	selector: 'app-data-selector',
	standalone: true,
	templateUrl: './data-selector.component.html',
	styleUrl: './data-selector.component.scss',
	imports: [ReactiveFormsModule, TranslateEnumPipe, MultiSelectInputComponent],
})
export class DataSelectorComponent implements OnInit {
	private fb = inject(FormBuilder);
	private apiFacade = inject(ApiFacade);

	public filterGroups = FilterGroups;

	public themen = Object.values(Thema);
	public gremien = Object.values(Gremium);
	public periode = Object.values(Gesetzgebungsperiode);
	public regierungen = Object.values(Regierungen);
	// todo: Gegenstand unterscheidet sich je nach Gremium
	public gegenstand = Object.values(Gegenstand);
	public fraktion = Object.values(Fraktion);

	public dataSelectorForm = this.fb.group({
		gremium: [Gremium.Nationalrat],
		themen: this.fb.array<boolean>([]),
		periode: this.fb.array<boolean>([]),
		regierungen: this.fb.array<boolean>([]),
		gegenstand: this.fb.array<boolean>([]),
		// gegenstand_art: this.fb.array<boolean>([]),
		fraktion: this.fb.array<boolean>([]),
	});

	ngOnInit(): void {
		this.addCheckboxes(this.themen, this.getControls('themen'));
		this.addCheckboxes(this.periode, this.getControls('periode'));
		this.addCheckboxes(this.regierungen, this.getControls('regierungen'));
		this.addCheckboxes(this.gegenstand, this.getControls('gegenstand'));
		this.addCheckboxes(this.fraktion, this.getControls('fraktion'));
	}

	private addCheckboxes(options: any[], formArray: FormArray) {
		options.forEach(() => formArray.push(new FormControl(false)));
	}

	public getControls(name: string): FormArray {
		return this.dataSelectorForm.get(name) as FormArray;
	}

	public searchData(): void {
		const gremium = this.dataSelectorForm.value.gremium || Gremium.Nationalrat;
		const gegenstand = this.dataSelectorForm.value.gegenstand?.flatMap((v, i) => (v ? this.gegenstand[i] : []));
		const periode = this.dataSelectorForm.value.periode?.flatMap((v, i) => (v ? this.periode[i] : []));
		const fraktion = this.dataSelectorForm.value.fraktion?.flatMap((v, i) => (v ? this.fraktion[i] : []));
		const themen = this.dataSelectorForm.value.themen?.flatMap((v, i) => (v ? this.themen[i] : []));

		const regierungsZeiten = this.dataSelectorForm.value.regierungen?.flatMap((v, i) =>
			v ? regierungsPerioden[i] : []
		);

		const filterRequestBody: FilterRequestBody = {
			NRBR: [gremium],
			VHG: gegenstand && gegenstand.length > 0 ? gegenstand : undefined,
			GP_CODE: periode && periode.length > 0 ? periode : undefined,
			FRAK_CODE: fraktion && fraktion.length > 0 ? fraktion : undefined,
			THEMEN: themen && themen.length > 0 ? themen : undefined,
			DATUM_VON:
				regierungsZeiten && regierungsZeiten.length === 1
					? [
							this.convertToIsoDateString(regierungsZeiten[0].start),
							...(!!regierungsZeiten[0].end ? [this.convertToIsoDateString(regierungsZeiten[0].end)] : []),
					  ]
					: undefined,
		};

		if (regierungsZeiten && regierungsZeiten.length > 0) {
			// Todo: send requests equal to regierungszeiten and merge responses
		}
		this.apiFacade.fetchData(filterRequestBody).pipe(take(1)).subscribe();
	}

	private convertToIsoDateString(dateString: string): string {
		const [day, month, year] = dateString.split('.');
		const date = new Date(`${year}-${month}-${day}`);
		return date.toISOString();
	}
}
