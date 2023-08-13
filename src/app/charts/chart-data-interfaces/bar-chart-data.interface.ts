export interface BarChartDataPoint {
	category: string;
	value: number;
}

export interface GroupedBarChartDataPoint {
	category: string;
	subCategory: string;
	value: number;
}

export interface StackedBarChartDataPoint {
	category: string;
	segment1: number;
	segment2: number;
	// ...
}
