import { Injectable } from '@angular/core';
import { NumberValue, axisBottom, axisLeft, max, nice, scaleBand, scaleLinear, select } from 'd3';
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
		let xAxisTitle: string;
		let yAxisTitle: string;

		const chart = (selection: any) => {
			const x = scaleBand()
				.domain(data.map(d => d.category))
				.range([margin.left, width - margin.right])
				.padding(0.2);

			const y = scaleLinear()
				.domain(nice(0, max(data.map(d => d.value as any)), 2))
				.range([height - margin.bottom, margin.top]);

			const tooltip = select('body')
				.append('div')
				.style('opacity', 0)
				.attr('class', 'text-xs inline-block bg-white border rounded p-2 border-black absolute pointer-events-none');

			selection
				.selectAll('line')
				.data(y.ticks())
				.join('line')
				.join('line')
				.attr('x1', margin.left)
				.attr('x2', width - margin.right)
				.attr('y1', (d: NumberValue) => y(d))
				.attr('y2', (d: NumberValue) => y(d))
				.attr('class', 'stroke-slate-200');

			selection
				.selectAll('bar')
				.data(data)
				.join('rect')
				.attr('x', (d: BarChartDataPoint) => x(d.category))
				.attr('y', (d: BarChartDataPoint) => y(d.value))
				.attr('width', x.bandwidth())
				.attr('height', (d: BarChartDataPoint) => height - margin.bottom - y(d.value))
				.attr('class', 'fill-tranquilBlue')
				/* .attr('fill', (d: BarChartDataPoint) =>
					d.category.includes(Fraktion.GRÜNE) ? '#73A31C' : d.category.includes(Fraktion.FPÖ) ? '#0156A2' : 'gray'
				) */
				.on('mouseover', (event: MouseEvent) => {
					select(event.target as any).style('opacity', 0.7);
					tooltip.style('opacity', 1);
				})
				.on('mousemove', (event: MouseEvent, d: BarChartDataPoint) => {
					tooltip
						.style('top', event.y + 'px')
						.style('left', event.x + 'px')
						.html(`${d.category}: ${d.value}`);
				})
				.on('mouseleave', (event: MouseEvent) => {
					tooltip.style('opacity', 0);
					select(event.target as any).style('opacity', 1);
				});

			// After drawing the bars

			selection
				.selectAll('.bar-labels')
				.data(data)
				.join('text')
				.attr('x', (d: BarChartDataPoint) => x(d.category)! + x.bandwidth() / 2)
				.attr('y', (d: BarChartDataPoint) => y(d.value) - 10)
				.text((d: BarChartDataPoint) => d.value)
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
