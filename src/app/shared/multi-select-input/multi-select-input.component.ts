import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterGroups, TranslateEnumPipe } from '../../features/data-selector/translateEnum.pipe';
import {
	AbstractControl,
	ControlContainer,
	FormControl,
	FormGroupDirective,
	ReactiveFormsModule,
} from '@angular/forms';

@Component({
	selector: 'app-multi-select-input',
	standalone: true,
	templateUrl: './multi-select-input.component.html',
	styleUrl: './multi-select-input.component.scss',
	viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
	imports: [NgFor, NgIf, NgClass, TranslateEnumPipe, ReactiveFormsModule],
})
export class MultiSelectInputComponent {
	@Input({ required: true }) label: string | undefined;
	@Input({ required: true }) formArrayName: string = '';
	@Input({ required: true }) options: string[] = [];
	@Input({ required: true }) controls: AbstractControl<any, any>[] = [];
	@Input() translation: FilterGroups | undefined;

	public openDropdown: boolean = false;
}
