import { CdkTableModule } from '@angular/cdk/table';

import { Component, computed, input, signal } from '@angular/core';

@Component({
	selector: 'app-chart-data-table',
	standalone: true,
	imports: [CdkTableModule],
	templateUrl: './chart-data-table.component.html',
	styleUrl: './chart-data-table.component.scss',
})
export class ChartDataTableComponent {
	public dynamicColumns = input<{ label: string; rnr: number; hidden: boolean }[]>([]);
	public dataSource = input<any[]>([]);

	public columns = computed(() => this.dynamicColumns().map(h => h.label));
	public displayedColumns = computed(() => ['checkbox', ...this.columns()]);

	sortKey = signal<number>(0);
	sortDirection = signal<string>('asc');

	public sortedDataSource = computed(() => {
		return this.dataSource();
		/* const data = [...this.dataSource()].sort((a, b) => {
			const aValue = a[this.columns()[this.sortKey()]];
			const bValue = b[this.columns()[this.sortKey()]];
			console.log(this.sortDirection());
			if (aValue > bValue) return this.sortDirection() === 'asc' ? 1 : -1;
			if (aValue < bValue) return this.sortDirection() === 'asc' ? -1 : 1;
			return 0;
		});
		console.log('data', data);
		return data; */
	});

	adjustSort(key: number) {
		if (this.sortKey() === key) {
			this.sortDirection.update(() => (this.sortDirection() === 'asc' ? 'desc' : 'asc'));
			return;
		}

		this.sortKey.update(() => key);
		this.sortDirection.update(() => 'asc');
	}
}
