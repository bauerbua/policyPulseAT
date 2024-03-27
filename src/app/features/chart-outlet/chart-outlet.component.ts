
import { Component, computed, inject } from '@angular/core';
import { Thema } from 'src/app/api/api-filter-dimensions';
import { ApiResponse, ItemKeys } from 'src/app/api/api-filter.interface';
import { BarChartDataPoint } from 'src/app/charts/chart-data-interfaces/bar-chart-data.interface';
import { DataTransformationService } from 'src/app/services/data-transformation.service';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { BarChartService } from '../../charts/bar-chart/bar-chart.service';
import { ApiDataStore } from '../../core/api-data.store';

@Component({
	selector: 'app-chart-outlet',
	standalone: true,
	templateUrl: './chart-outlet.component.html',
	styleUrl: './chart-outlet.component.scss',
	imports: [BarChartComponent],
})
export class ChartOutletComponent {
	public apiDataStore = inject(ApiDataStore);
	private barChartService = inject(BarChartService);
	private dataTransformationService = inject(DataTransformationService);

	public barChartData = computed(() => {
		// this is not computing on each change. Probably because signal is nested in funtion?
		return {
			data: this.barChartService.transformData(this.apiDataStore.chartData(), this.transformBarChartData.bind(this)),
			source: this.apiDataStore.chartDataSource(),
		};
	});

	public totalDataCount = computed(() => this.apiDataStore.dataCount());
	public countedMultipleTimes = computed(
		() => this.barChartData().data.reduce((a, b) => a + b.value, 0) - this.totalDataCount()
	);

	private transformBarChartData(apiData: ApiResponse['data']['rows']): BarChartDataPoint[] {
		const categoryCounts = this.dataTransformationService.countByCategory(apiData, ItemKeys.Themen, [
			Thema.Arbeit,
			Thema.Außenpolitik,
			Thema.Bildung,
			Thema.BudgetUndFinanzen,
			Thema.EuropäischeUnion,
			Thema.FamilieUndGenerationen,
			Thema.FrauenUndGleichbehandlung,
			Thema.GesundheitUndErnährung,
			Thema.InformationUndMedien,
			Thema.InneresUndRecht,
			Thema.InnovationTechnologieUndForschung,
			Thema.KlimaUmweltUndEnergie,
			Thema.Kultur,
			Thema.LandUndForstwirtschaft,
			Thema.Landesverteidigung,
			Thema.ParlamentUndDemokratie,
			Thema.Soziales,
			Thema.Sport,
			Thema.VerkehrUndInfrastruktur,
			Thema.Wirtschaft,
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
