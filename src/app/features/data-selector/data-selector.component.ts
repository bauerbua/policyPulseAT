import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Gesetzgebungsperiode, Gremium, Thema } from 'src/app/api/api-filter-dimensions';
import { Gegenstand, Fraktion } from '../../api/api-filter-dimensions';
import { FilterRequestBody } from '../../api/api-filter.interface';
import { ApiFacade } from 'src/app/api/api.facade.service';
import { ApiDataStore } from '../../core/api-data.store';
import { take } from 'rxjs';

@Component({
	selector: 'app-data-selector',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './data-selector.component.html',
	styleUrl: './data-selector.component.scss',
})
export class DataSelectorComponent implements OnInit {
	private fb = inject(FormBuilder);
	private apiFacade = inject(ApiFacade);
	private apiDataStore = inject(ApiDataStore);

	public themen = Object.values(Thema);
	public gremien = Object.values(Gremium);
	public periode = Object.values(Gesetzgebungsperiode);
	// todo: Gegenstand unterscheidet sich je nach Gremium
	public gegenstand = Object.values(Gegenstand);
	public fraktion = Object.values(Fraktion);

	public dataSelectorForm = this.fb.group({
		gremium: [Gremium.Nationalrat],
		themen: this.fb.array<boolean>([]),
		periode: this.fb.array<boolean>([]),
		gegenstand: this.fb.array<boolean>([]),
		// gegenstand_art: this.fb.array<boolean>([]),
		fraktion: this.fb.array<boolean>([]),
	});

	ngOnInit(): void {
		this.addCheckboxes(this.themen, this.getControls('themen'));
		this.addCheckboxes(this.periode, this.getControls('periode'));
		this.addCheckboxes(this.gegenstand, this.getControls('gegenstand'));
		this.addCheckboxes(this.fraktion, this.getControls('fraktion'));
	}

	private addCheckboxes(options: any[], formArray: FormArray) {
		options.forEach(() => formArray.push(new FormControl(false)));
	}

	public getControls(name: string): FormArray {
		return this.dataSelectorForm.get(name) as FormArray;
	}

	public searchData() {
		const gremium = this.dataSelectorForm.value.gremium || Gremium.Nationalrat;
		const gegenstand = this.dataSelectorForm.value.gegenstand?.filter(v => v).map((v, i) => this.gegenstand[i]);
		const periode = this.dataSelectorForm.value.periode?.filter(v => v).map((v, i) => this.periode[i]);
		const fraktion = this.dataSelectorForm.value.fraktion?.filter(v => v).map((v, i) => this.fraktion[i]);
		const themen = this.dataSelectorForm.value.themen?.filter(v => v).map((v, i) => this.themen[i]);

		const filterRequestBody: FilterRequestBody = {
			NRBR: [gremium],
			VHG: gegenstand && gegenstand.length > 0 ? gegenstand : undefined,
			GP_CODE: periode && periode.length > 0 ? periode : undefined,
			FRAK_CODE: fraktion && fraktion.length > 0 ? fraktion : undefined,
			THEMEN: themen && themen.length > 0 ? themen : undefined,
		};
		this.apiFacade.fetchData(filterRequestBody).pipe(take(1)).subscribe();
	}
}
