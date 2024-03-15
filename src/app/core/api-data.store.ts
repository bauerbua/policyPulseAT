import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { LocalStorageService } from '../services/localStorage.service';

export interface ApiDataState {
	data: {
		count: number;
		header: any[];
		pages: number;
		rows: any[];
	};
	source?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiDataStore {
	private localStorageService = inject(LocalStorageService);

	state = signal<ApiDataState>({
		data: {
			count: 0,
			header: [],
			pages: 0,
			rows: [],
		},
	});

	public chartData = computed(() => this.state().data.rows);
	public dataCount = computed(() => this.state().data.count);
	public chartDataSource = computed(() => this.state().source);
	public headers = computed(() => this.state().data.header);
	public displayedHeaders = computed(() => this.headers().flatMap(h => (!h.hidden ? h : [])));

	constructor() {
		const storedData = this.localStorageService.getItem<ApiDataState>('apiData');
		if (storedData) this.state.set(storedData);

		effect(() => {
			this.localStorageService.setItem('apiData', this.state());

			console.log('state', this.state());
		});
	}

	public updateData(data: ApiDataState) {
		this.state.update(state => ({ ...state, ...data }));
	}
}
