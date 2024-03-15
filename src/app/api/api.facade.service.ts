import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiDataStore } from '../core/api-data.store';
import { ApiResponse, FilterRequestBody } from './api-filter.interface';

@Injectable({ providedIn: 'root' })
export class ApiFacade {
	private http = inject(HttpClient);
	private apiDataStore = inject(ApiDataStore);
	public source: string | undefined;

	public fetchData(filters?: FilterRequestBody): Observable<boolean> {
		return this.http
			.post<ApiResponse['data']>('/api/filter/data/101?js=eval&showAll=true', filters ? filters : {})
			.pipe(
				map(res => {
					const data = {
						data: res,
						source: this.getSource(filters),
					};
					this.apiDataStore.updateData(data);
					return true;
				})
			);
	}

	private getSource(requestParams: FilterRequestBody | undefined): string {
		let sourceBaseUrl = 'https://www.parlament.gv.at/recherchieren/gegenstaende/index.html?';
		if (requestParams) {
			Object.entries(requestParams).forEach(([key, valuesArray]) => {
				if (valuesArray)
					valuesArray.forEach((value: string) => {
						value = value.replace(/ /g, '+');
						sourceBaseUrl = sourceBaseUrl + `FP_001${key}=${value}&`;
					});
			});
		}
		return sourceBaseUrl.substring(0, sourceBaseUrl.length - 1);
	}
}
