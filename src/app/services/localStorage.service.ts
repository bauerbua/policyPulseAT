import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
	public setItem<T>(key: string, value: T) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	public getItem<T>(key: string): T | undefined {
		const data = localStorage.getItem(key);
		if (!data) {
			return undefined;
		}
		return JSON.parse(data);
	}
}
