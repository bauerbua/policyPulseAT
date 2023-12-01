import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { BaseType, Selection, select } from 'd3';
import { BarChartDataPoint } from '../chart-data-interfaces/bar-chart-data.interface';
import { BarChart } from './bar-chart';

@Component({
	selector: 'app-bar-chart',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, OnChanges {
	@Input({ required: true }) data: BarChartDataPoint[] | undefined;
	@Input({ required: true }) source: string | undefined;

	private barChart = inject(BarChart);

	private margin = {
		top: 20,
		right: 20,
		bottom: 180,
		left: 70,
	};
	private height: number = 600;
	private width: number = 600;
	private svg: Selection<BaseType, unknown, HTMLElement, any> | undefined;

	ngOnInit(): void {
		this.svg = select('#barChart').attr('width', this.width).attr('height', this.height);
		const plot = this.barChart
			.createChart()
			.width(this.width)
			.height(this.height)
			.data(this.data)
			.xValue((d: BarChartDataPoint) => d.category)
			.yValue((d: BarChartDataPoint) => d.value)
			.margin(this.margin)
			.yAxisTitle('Anzahl der Gesetzesbeschlüsse');
		this.svg.call(plot);
	}

	ngOnChanges(changes: SimpleChanges): void {}
}
