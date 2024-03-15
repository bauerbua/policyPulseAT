import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { BaseType, Selection, select } from 'd3';
import { SvgService } from 'src/app/services/download-svg.service';
import { BarChartDataPoint } from '../chart-data-interfaces/bar-chart-data.interface';
import { BarChart } from './bar-chart';

@Component({
	selector: 'app-bar-chart',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
	@Input({ required: true }) data: BarChartDataPoint[] | undefined;
	@Input({ required: true }) source: string | undefined;

	private barChart = inject(BarChart);
	private svgService = inject(SvgService);

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

	public downloadSvg(svg: HTMLElement) {
		let svgBody: any = svg.innerHTML;
		let svgContent =
			'﻿<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="4239.54 906.94 3137 1984">' +
			svgBody +
			'</svg>';
		this.svgService.download(svgContent, 'chart.svg');
	}
}
