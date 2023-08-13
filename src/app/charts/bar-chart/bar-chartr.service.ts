import { Injectable } from '@angular/core';
import { BarChartDataPoint } from '../chart-data-interfaces/bar-chart-data.interface';

type DataTransformationFunction<T> = (data: T) => BarChartDataPoint[];

@Injectable({ providedIn: 'root' })
export class BarChartService {
	transformData<T>(data: T, transformationFunction: DataTransformationFunction<T>): BarChartDataPoint[] {
		return transformationFunction(data);
	}
}
