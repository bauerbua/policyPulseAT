import { Injectable, computed, signal } from '@angular/core';

export interface ApiDataState {
	data?: {
		count: number;
		header: any[];
		pages: number;
		rows: any[];
	};
	source?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiDataStore {
	state = signal<ApiDataState>({});

	public updateData(data: ApiDataState) {
		this.state.update(state => ({ ...state, ...data }));
	}

	public chartData = computed(() => this.state().data?.rows);

	public dataCount = computed(() => this.state().data?.count);
}
