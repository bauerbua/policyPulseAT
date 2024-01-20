import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse, FilterRequestBody } from './api-filter.interface';

@Injectable({ providedIn: 'root' })
export class ApiFacade {
	private http = inject(HttpClient);
	public source: string | undefined;

	public fetchData(filters?: FilterRequestBody): Observable<ApiResponse> {
		return this.http
			.post<ApiResponse['data']>(
				'https://www.parlament.gv.at/Filter/api/filter/data/101?js=eval&showAll=true',
				filters ? filters : {}
			)
			.pipe(
				map(res => {
					return {
						data: res,
						source: this.getSource(filters),
					};
				})
			);
	}

	private getSource(requestParams: FilterRequestBody | undefined): string {
		let sourceBaseUrl = 'https://www.parlament.gv.at/recherchieren/gegenstaende/index.html?';
		if (requestParams) {
			Object.entries(requestParams).forEach(([key, valuesArray]) => {
				valuesArray.forEach((value: string) => {
					value = value.replace(/ /g, '+');
					sourceBaseUrl = sourceBaseUrl + `FP_001${key}=${value}&`;
				});
			});
		}
		return sourceBaseUrl.substring(0, sourceBaseUrl.length - 1);
	}
}
