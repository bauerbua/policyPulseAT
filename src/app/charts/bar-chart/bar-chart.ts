import { Injectable } from '@angular/core';
import { axisBottom, axisLeft, extent, scaleBand, scaleLinear } from 'd3';
import { BarChartDataPoint } from '../chart-data-interfaces/bar-chart-data.interface';

export interface IBarChartConfig {
	data: BarChartDataPoint[];
	width: any;
	height: any;
	// probably adapt usage of xValue and yValue for BarChart instead of ScatterPlot
	xValue: any;
	yValue: any;
	margin: { top: number; right: number; bottom: number; left: number };
	xAxisLabel: string;
	yAxisLabel: string;
}

@Injectable({
	providedIn: 'root',
})
export class BarChart {
	// To do: define interface for config
	public createChart = () => {
		let width: IBarChartConfig['width'];
		let height: IBarChartConfig['height'];
		let data: IBarChartConfig['data'];
		let xValue: IBarChartConfig['xValue'];
		let yValue: IBarChartConfig['yValue'];
		let margin: IBarChartConfig['margin'];

		const chart = (selection: any) => {
			const x = scaleBand()
				.domain(data.map(d => d.category))
				.range([margin.left, width - margin.right]);

			const y = scaleLinear().domain(<[any, any]>extent(data, yValue));
			const bars = selection
				.selectAll('bar')
				.data(data)
				.join('rect')
				.attr('x', (d: BarChartDataPoint) => x(d.category))
				.attr('y', (d: BarChartDataPoint) => d.value)
				.attr('width', x.bandwidth())
				.attr('height', (d: BarChartDataPoint) => height - y(d.value))
				.attr('fill', '#69b3a2');
			console.log(bars);

			selection
				.selectAll('.y-axis')
				.data([null])
				.join('g')
				.attr('class', 'y-axis')
				.attr('transform', `translate(${margin.left},0)`)
				.call(axisLeft(y));

			selection
				.selectAll('.x-axis')
				.data([null])
				.join('g')
				.attr('class', 'x-axis')
				.attr('transform', `translate(0,${height - margin.bottom})`)
				.call(axisBottom(x));
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

		chart.margin = function (_: { top: number; right: number; bottom: number; left: number }) {
			return arguments.length ? ((margin = _), chart) : margin;
		};

		return chart;
	};
}
