import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
	selector: 'app-pie-chart',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './pie-chart.component.html',
	styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, OnChanges {
	@Input() data: any;

	xScale = d3.scaleBand().range([30, 190]);
	yScale = d3.scaleLinear().range([180, 20]);
	colorScale = d3.scaleOrdinal(d3.schemeAccent);

	DUMMY_DATA = [
		{ fraktion: 'GRÜNE', count: 29 },
		{ fraktion: 'FPÖ', count: 12 },
	];

	ngOnInit(): void {
		/* this.createSvg();
		this.drawBars(this.DUMMY_DATA); */
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.DUMMY_DATA.length > 0) {
			this.xScale.domain(this.DUMMY_DATA.map(d => d.fraktion));
			this.yScale.domain([0, d3.max(this.DUMMY_DATA, d => d.count) as number]);
		}
	}

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
