import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Gegenstand, Gesetzgebungsperiode, Gremium, Thema } from './api/api-filter-dimensions';
import { ApiResponse, FilterRequestBody, ItemKeys } from './api/api-filter.interface';
import { ApiFacade } from './api/api.facade.service';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { BarChartService } from './charts/bar-chart/bar-chart.service';
import { BarChartDataPoint } from './charts/chart-data-interfaces/bar-chart-data.interface';
import { HeaderComponent } from './core/header/header.component';
import { DataTransformationService } from './services/data-transformation.service';
import { LineChartService } from './charts/line-chart/line-chart.service';
import { LineChartDataPoint } from './charts/chart-data-interfaces/line-chart-data.interface';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { DataSelectorComponent } from './features/data-selector/data-selector.component';
import { ChartOutletComponent } from "./features/chart-outlet/chart-outlet.component";
import { ChartPickerComponent } from "./features/chart-picker/chart-picker.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgIf, AsyncPipe, BarChartComponent, HeaderComponent, LineChartComponent, DataSelectorComponent, ChartOutletComponent, ChartPickerComponent]
})
export class AppComponent implements OnInit {
	private apiFacade = inject(ApiFacade);
	private barChartService = inject(BarChartService);
	private lineChartService = inject(LineChartService);
	private dataTransformationService = inject(DataTransformationService);

	public itemKeys = ItemKeys;
	public barChart$: Observable<{ data: BarChartDataPoint[]; source: string }> | undefined;
	public lineChart$: Observable<{ data: LineChartDataPoint[]; source: string }> | undefined;

	ngOnInit() {
		const filters: FilterRequestBody = {
			NRBR: [Gremium.Nationalrat],
			VHG: [Gegenstand.Regierungsvorlagen_Gesetze],
			GP_CODE: [Gesetzgebungsperiode.XXVII_2019],
		};
		/*     this.barChart$ = this.apiFacade.fetchData(filters).pipe(
      map((res) => {
        return {
          data: this.barChartService.transformData(
            res.data.rows,
            this.transformBarChartData.bind(this),
          ),
          source: res.source,
        };
      }),
    );
    this.lineChart$ = this.apiFacade.fetchData(filters).pipe(
      map((res) => {
        return {
          data: this.lineChartService.transformData(
            res.data.rows,
            this.transformLineChartData.bind(this),
          ),
          source: res.source,
        };
      }),
    ); */

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

	private transformLineChartData(apiData: ApiResponse['data']['rows']): LineChartDataPoint[] {
		const categoryCounts = this.dataTransformationService.countByCategory(apiData, ItemKeys.DatumLetzteVerfahrensstufe);
		const result: LineChartDataPoint[] = [];
		for (const category in categoryCounts) {
			if (categoryCounts.hasOwnProperty(category)) {
				result.push({ x: category as any, y: categoryCounts[category] });
			}
		}
		return result;
	}
}
