import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, FilterRequestBody } from './api-filter.interface';

@Injectable({ providedIn: 'root' })
export class ApiFacade {
	private http = inject(HttpClient);

	public fetchData(filters?: FilterRequestBody): Observable<ApiResponse> {
		return this.http.post<ApiResponse>(
			'https://www.parlament.gv.at/Filter/api/filter/data/101?js=eval&showAll=true',
			filters ? filters : {}
		);
	}
}
