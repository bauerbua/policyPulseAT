import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartDataPoint } from '../chart-data-interfaces/bar-chart-data.interface';
import { BarChart } from './bar-chart';
import { BaseType, Selection, scaleOrdinal, schemeAccent, select } from 'd3';

@Component({
	selector: 'app-bar-chart',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, OnChanges {
	@Input({ required: true }) data: BarChartDataPoint[] | undefined;

	private barChart = inject(BarChart);
	private hostElement = inject(ElementRef);

	private margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20,
	};
	private height: number = 400;
	private width: number = 600;
	// private height: number = this.hostElement.nativeElement.offsetHeight;
	// private width: number = this.hostElement.nativeElement.offsetWidth;

	colorScale = scaleOrdinal(schemeAccent);
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
			.margin(this.margin);
		this.svg.call(plot);
	}

	ngOnChanges(changes: SimpleChanges): void {}

	/* private createSvg(): void {
		this.svg = d3
			.select('#chart')
			.append('svg')
			.attr('width', this.width + this.margin * 2)
			.attr('height', this.height + this.margin * 2)
			.append('g')
			.attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
	}

	private drawBars(data: { fraktion: string; count: number }[]): void {
		// Create the X-axis band scale
		const x = d3
			.scaleBand()
			.range([0, this.width])
			.domain(data.map(d => d.fraktion))
			.padding(0.2);

		// Draw the X-axis on the DOM
		this.svg
			.append('g')
			.attr('transform', 'translate(0,' + this.height + ')')
			.call(d3.axisBottom(x))
			.selectAll('text')
			.attr('transform', 'translate(-10,0)rotate(-45)')
			.style('text-anchor', 'end');

		// Create the Y-axis band scale
		const y = d3.scaleLinear().domain([0, 35]).range([this.height, 0]);

		// Draw the Y-axis on the DOM
		this.svg.append('g').call(d3.axisLeft(y));

		// Create and fill the bars
		this.svg
			.selectAll('bars')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', (d: { fraktion: string; count: number }) => x(d.fraktion))
			.attr('y', (d: { fraktion: string; count: number }) => y(d.count))
			.attr('width', x.bandwidth())
			.attr('height', (d: { fraktion: string; count: number }) => this.height - y(d.count))
			.attr('fill', '#d04a35');
	} */
}
