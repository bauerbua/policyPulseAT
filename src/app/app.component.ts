import { Component, OnInit, inject } from '@angular/core';
import { ApiFacade } from './api/api.facade.service';
import { ApiResponse, FilterRequestBody, ItemKeys } from './api/api-filter.interface';
import { Fraktion, Gremium, Thema } from './api/api-filter-dimensions';
import { Observable, map, of } from 'rxjs';
import { mockRows } from './api/mock/mock.data';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        PieChartComponent,
        AsyncPipe,
    ],
})
export class AppComponent implements OnInit {
	private apiFacade = inject(ApiFacade);
	public itemKeys = ItemKeys;
	public data$: Observable<ApiResponse['rows']> | undefined;

	ngOnInit() {
		const filters: FilterRequestBody = {
			NPBR: [Gremium.Nationalrat],
			VHG: ['ANTR'],
			DATUM_VON: ['01.01.2023'],
			GP_CODE: ['XXVII'],
			THEMEN: [Thema.Arbeit],
			FRAK_CODE: [Fraktion.FPÖ, Fraktion.GRÜNE],
		};
		/* 		this.data$ = this.apiFacade.fetchData(filters).pipe(
			map(res => {
				return res.rows;
			})
		); */

		this.data$ = of(mockRows);
	}
}
