import { Injectable } from '@angular/core';
import { axisBottom, axisLeft, curveLinear, extent, line, max, scaleLinear, scaleUtc, timeParse } from 'd3';
import { LineChartDataPoint } from '../chart-data-interfaces/line-chart-data.interface';

export interface ILineChartConfig {
	data: LineChartDataPoint[];
	width: any;
	height: any;
	xValue: any;
	yValue: any;
	margin: { top: number; right: number; bottom: number; left: number };
	xAxisLabel: string;
	yAxisLabel: string;
}

@Injectable({
	providedIn: 'root',
})
export class LineChart {
	public createChart = () => {
		let width: ILineChartConfig['width'];
		let height: ILineChartConfig['height'];
		let data: ILineChartConfig['data'];
		let xValue: ILineChartConfig['xValue'];
		let yValue: ILineChartConfig['yValue'];
		let margin: ILineChartConfig['margin'];
		let xAxisTitle: string;
		let yAxisTitle: string;

		const chart = (selection: any) => {
			let parseTime = timeParse('%d.%m.%Y');

			const x = scaleUtc()
				.domain(extent(data, d => parseTime(d.x!)) as [Date, Date])
				.range([margin.left, width - margin.right]);

			const y = scaleLinear()
				.domain([0, max(data, d => d.y) || 0])
				.nice()
				.range([height - margin.bottom, margin.top]);

			const lineGenerator = line<LineChartDataPoint>()
				.x((d: LineChartDataPoint) => x(parseTime(d.x)!))
				.y((d: LineChartDataPoint) => y(d.y));

			selection
				.append('path')
				.datum(data)
				.attr('fill', 'none')
				.attr('stroke', 'steelblue')
				.attr('stroke-width', 2)
				.attr('d', lineGenerator);

			/* selection
				.selectAll('circle')
				.data(data)
				.join('circle')
				.attr('cx', (d: LineChartDataPoint) => x(parseTime(d.x)!))
				.attr('cy', (d: LineChartDataPoint) => y(d.y))
				.attr('r', 4)
				.attr('fill', 'steelblue'); */

			// Rest of the code...

			selection
				.selectAll('.bar-labels')
				.data(data)
				.join('text')
				.attr('x', (d: LineChartDataPoint) => x(parseTime(d.x)!))
				.attr('y', (d: LineChartDataPoint) => y(d.y) - 10)
				.text((d: LineChartDataPoint) => d.y)
				.attr('text-anchor', 'middle')
				.attr('class', 'bar-label');

			selection
				.selectAll('.y-axis')
				.data([null])
				.join('g')
				.attr('class', 'axis')
				.attr('transform', `translate(${margin.left},0)`)
				.call(axisLeft(y));

			selection
				.selectAll('.x-axis')
				.data([null])
				.join('g')
				.attr('class', 'axis')
				.attr('transform', `translate(0,${height - margin.bottom})`)
				.call(axisBottom(x))
				.selectAll('text')
				.style('text-anchor', 'end')
				.attr('transform', 'rotate(-45 10 10)');

			selection
				.append('text')
				.attr('text-anchor', 'end')
				.attr('transform', 'rotate(-90)')
				.attr('class', 'axisTitle')
				.attr('y', margin.left / 3)
				.attr('x', -(height - margin.bottom) / 2)
				.text(yAxisTitle);

			selection
				.append('text')
				.attr('text-anchor', 'end')
				.attr('class', 'axisTitle')
				.attr('y', height - margin.bottom / 3)
				.attr('x', (width + margin.left) / 2)
				.text(xAxisTitle);
		};

		chart.width = function (_: any) {
			return arguments.length ? ((width = +_), chart) : width;
		};

		chart.height = function (_: any) {
			return arguments.length ? ((height = +_), chart) : height;
		};

		chart.data = function (_: any) {
			return arguments.length ? ((data = _), chart) : data;
		};

		chart.xValue = function (_: any) {
			return arguments.length ? ((xValue = _), chart) : xValue;
		};

		chart.yValue = function (_: any) {
			return arguments.length ? ((yValue = _), chart) : yValue;
		};

		chart.xAxisTitle = function (_: any) {
			return arguments.length ? ((xAxisTitle = _), chart) : xAxisTitle;
		};

		chart.yAxisTitle = function (_: any) {
			return arguments.length ? ((yAxisTitle = _), chart) : yAxisTitle;
		};

		chart.margin = function (_: { top: number; right: number; bottom: number; left: number }) {
			return arguments.length ? ((margin = _), chart) : margin;
		};

		return chart;
	};
}
