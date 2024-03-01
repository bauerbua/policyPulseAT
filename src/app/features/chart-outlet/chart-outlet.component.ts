import { Component, inject } from '@angular/core';
import { ApiDataStore } from '../../core/api-data.store';

@Component({
	selector: 'app-chart-outlet',
	standalone: true,
	imports: [],
	templateUrl: './chart-outlet.component.html',
	styleUrl: './chart-outlet.component.scss',
})
export class ChartOutletComponent {
	public apiDataStore = inject(ApiDataStore);
}
