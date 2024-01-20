import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { BaseType, Selection, select } from 'd3';
import { LineChartDataPoint } from '../chart-data-interfaces/line-chart-data.interface';
import { LineChart } from './line-chart';

@Component({
	selector: 'app-line-chart',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
	@Input({ required: true }) data: LineChartDataPoint[] | undefined;
	@Input({ required: true }) source: string | undefined;

	private lineChart = inject(LineChart);

	private svg: Selection<BaseType, unknown, HTMLElement, any> | undefined;
	private margin = {
		top: 20,
		right: 20,
		bottom: 180,
		left: 70,
	};
	private height: number = 600;
	private width: number = 1000;
	ngOnInit(): void {
		console.log('data', this.data);
		this.svg = select('#lineChart').attr('width', this.width).attr('height', this.height);
		const plot = this.lineChart
			.createChart()
			.width(this.width)
			.height(this.height)
			.data(this.data)
			.xValue((d: LineChartDataPoint) => d.x)
			.yValue((d: LineChartDataPoint) => d.y)
			.margin(this.margin)
			.yAxisTitle('Anzahl der Gesetzesbeschlüsse');
		this.svg.call(plot);
	}
}
