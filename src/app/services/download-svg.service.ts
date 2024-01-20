import { Injectable, inject } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';

@Injectable({ providedIn: 'root' })
export class SvgService {
	private fileSaverService = inject(FileSaverService);

	download(svgContent: string, filename: string) {
		let svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
		this.fileSaverService.save(svgBlob, filename);
	}
}
