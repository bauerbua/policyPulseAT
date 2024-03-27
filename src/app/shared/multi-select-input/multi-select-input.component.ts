import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FilterGroups, TranslateEnumPipe } from '../../features/data-selector/translateEnum.pipe';

@Component({
	selector: 'app-multi-select-input',
	standalone: true,
	templateUrl: './multi-select-input.component.html',
	styleUrl: './multi-select-input.component.scss',
	viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
	imports: [NgClass, TranslateEnumPipe, ReactiveFormsModule],
})
export class MultiSelectInputComponent {
	@Input({ required: true }) label: string | undefined;
	@Input({ required: true }) formArrayName: string = '';
	@Input({ required: true }) options: string[] = [];
	@Input({ required: true }) controls: AbstractControl<any, any>[] = [];
	@Input() translation: FilterGroups | undefined;

	public openDropdown: boolean = false;
}
