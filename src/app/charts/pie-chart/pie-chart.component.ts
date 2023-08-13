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
export class PieChartComponent {
	@Input() data: any;
}
