import { Component } from '@angular/core';

@Component({
	selector: 'app-chart-picker',
	standalone: true,
	imports: [],
	templateUrl: './chart-picker.component.html',
	styleUrl: './chart-picker.component.scss',
})
export class ChartPickerComponent {
	selectChart(chartType: string) {
		if (chartType === 'bar') {
			console.log('init bar chart');
		}
	}
}
