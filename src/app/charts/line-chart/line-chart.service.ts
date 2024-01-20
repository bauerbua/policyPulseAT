import { Injectable } from '@angular/core';
import { LineChartDataPoint } from '../chart-data-interfaces/line-chart-data.interface';

type DataTransformationFunction<T> = (data: T) => LineChartDataPoint[];

@Injectable({ providedIn: 'root' })
export class LineChartService {
	transformData<T>(data: T, transformationFunction: DataTransformationFunction<T>): LineChartDataPoint[] {
		return transformationFunction(data);
	}
}
