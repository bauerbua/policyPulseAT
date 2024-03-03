import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { fpö_grüne_arbeit } from '../api/mock/fpö_grüne_arbeit';

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
	if (
		request.url.includes('https://www.parlament.gv.at/Filter/api/filter/data/101?js=eval&showAll=true') &&
		request.method === 'POST'
	) {
		console.log('intercepted request', request);
		return of(new HttpResponse({ status: 200, body: fpö_grüne_arbeit }));
	}
	return next(request);
};
