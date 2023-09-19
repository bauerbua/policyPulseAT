import { Component, OnInit, inject } from '@angular/core';
import { ApiFacade } from './api/api.facade.service';
import { ApiResponse, FilterRequestBody, ItemKeys } from './api/api-filter.interface';
import { Fraktion, Gremium, Thema } from './api/api-filter-dimensions';
import { Observable, of } from 'rxjs';
import { mockRows } from './api/mock/mock.data';
import { NgIf, AsyncPipe } from '@angular/common';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { BarChartDataPoint } from './charts/chart-data-interfaces/bar-chart-data.interface';
import { BarChartService } from './charts/bar-chart/bar-chartr.service';

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
	public itemKeys = ItemKeys;
	public barChartData$: Observable<BarChartDataPoint[]> | undefined;

	ngOnInit() {
		const filters: FilterRequestBody = {
			NPBR: [Gremium.Nationalrat],
			VHG: ['ANTR'],
			DATUM_VON: ['01.01.2023'],
			GP_CODE: ['XXVII'],
			THEMEN: [Thema.Arbeit],
			FRAK_CODE: [Fraktion.FPÖ, Fraktion.GRÜNE],
		};
		/* 		this.barChartData$ = this.apiFacade.fetchData(filters).pipe(
			map(res => {
				return res.rows;
			})
		); */

		this.barChartData$ = of(this.barChartService.transformData(mockRows, this.transformBarChartData));
	}

	// this function would define what should be picked and how it schould be calculated --> differs from chart to chart
	private transformBarChartData(apiData: ApiResponse['rows']): BarChartDataPoint[] {
		const categoryCounts: { [category: string]: number } = {};

		for (const item of apiData) {
			const category = item[ItemKeys.KlubFraktionscode];
			if (category) {
				if (categoryCounts.hasOwnProperty(category)) {
					categoryCounts[category]++;
				} else {
					categoryCounts[category] = 1;
				}
			}
		}

		const result: BarChartDataPoint[] = [];
		for (const category in categoryCounts) {
			if (categoryCounts.hasOwnProperty(category)) {
				result.push({ category, value: categoryCounts[category] });
			}
		}

		return result;
	}
}
