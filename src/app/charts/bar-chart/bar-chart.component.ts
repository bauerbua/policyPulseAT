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
})
export class BarChartComponent implements OnInit, OnChanges {
	@Input({ required: true }) data: BarChartDataPoint[] | undefined;

	private barChart = inject(BarChart);

	private margin = {
		top: 20,
		right: 20,
		bottom: 40,
		left: 40,
	};
	private height: number = 600;
	private width: number = 600;
	private svg: Selection<BaseType, unknown, HTMLElement, any> | undefined;

	ngOnInit(): void {
		console.log(this.data);
		this.svg = select('#barChart').attr('width', this.width).attr('height', this.height);
		const plot = this.barChart
			.createChart()
			.width(this.width)
			.height(this.height)
			.data(this.data)
			.xValue((d: BarChartDataPoint) => d.category)
			.yValue((d: BarChartDataPoint) => d.value)
			.margin(this.margin);
		this.svg.call(plot);
	}

	ngOnChanges(changes: SimpleChanges): void {}
}
