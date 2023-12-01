import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Fraktion, Gegenstand, Gesetzgebungsperiode, Gremium, Thema } from './api/api-filter-dimensions';
import { ApiResponse, FilterRequestBody, ItemKeys } from './api/api-filter.interface';
import { ApiFacade } from './api/api.facade.service';
import { mockRows } from './api/mock/mock.data';
import { fpö_grüne_arbeit } from './api/mock/fpö_grüne_arbeit';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { BarChartService } from './charts/bar-chart/bar-chart.service';
import { BarChartDataPoint } from './charts/chart-data-interfaces/bar-chart-data.interface';
import { DataTransformationService } from './services/data-transformation.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [NgIf, AsyncPipe, BarChartComponent],
})
export class AppComponent implements OnInit {
	private apiFacade = inject(ApiFacade);
	private barChartService = inject(BarChartService);
	private dataTransformationService = inject(DataTransformationService);

	public itemKeys = ItemKeys;
	public barChart$: Observable<{ data: BarChartDataPoint[]; source: string }> | undefined;

	ngOnInit() {
		const filters: FilterRequestBody = {
			NRBR: [Gremium.Nationalrat],
			VHG: [Gegenstand.Regierungsvorlagen_Gesetze],
			GP_CODE: [Gesetzgebungsperiode.XXVII_2019],
			THEMEN: [Thema.KlimaUmweltUndEnergie, Thema.Bildung, Thema.FamilieUndGenerationen],
		};
		this.barChart$ = this.apiFacade.fetchData(filters).pipe(
			map(res => {
				return {
					data: this.barChartService.transformData(res.data.rows, this.transformBarChartData.bind(this)),
					source: res.source,
				};
			})
		);

		// this.barChartData$ = of(this.barChartService.transformData(mockRows, this.transformBarChartData.bind(this)));
	}

	// this function would define what should be picked and how it should be calculated --> differs from chart to chart
	private transformBarChartData(apiData: ApiResponse['data']['rows']): BarChartDataPoint[] {
		const categoryCounts = this.dataTransformationService.countByCategory(apiData, ItemKeys.Themen, [
			Thema.KlimaUmweltUndEnergie,
			Thema.Bildung,
			Thema.FamilieUndGenerationen,
		]);
		const result: BarChartDataPoint[] = [];
		for (const category in categoryCounts) {
			if (categoryCounts.hasOwnProperty(category)) {
				result.push({ category, value: categoryCounts[category] });
			}
		}
		return result;
	}
}
