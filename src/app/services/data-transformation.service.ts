import { Injectable } from '@angular/core';
import { ApiResponse, ItemKeys } from '../api/api-filter.interface';

@Injectable({ providedIn: 'root' })
export class DataTransformationService {
	public countByCategory(data: ApiResponse['data']['rows'], category: ItemKeys, showOnly?: string[]) {
		let categoryCounts: { [key: string]: number } = {};

		for (const item of data) {
			const cat: string = JSON.parse(item[category] as string);
			if (Array.isArray(cat)) {
				for (const catItem of cat) {
					if (categoryCounts[catItem]) {
						categoryCounts[catItem]++;
					} else {
						categoryCounts[catItem] = 1;
					}
				}
			}
		}
		if (showOnly) {
			categoryCounts = Object.fromEntries(
				Object.entries(categoryCounts).filter(([key, value]) => showOnly.includes(key))
			);
		}

		const sortedCounts = Object.fromEntries(Object.entries(categoryCounts).sort(([, a], [, b]) => b - a));
		return sortedCounts;
	}
}
