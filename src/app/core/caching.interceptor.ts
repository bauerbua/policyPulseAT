import { HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';

const cache: Map<HttpRequest<any>, HttpResponse<any>> = new Map();

export const cachingInterceptor: HttpInterceptorFn = (request, next) => {
	if (
		request.method !== 'GET' &&
		!request.url.includes('https://www.parlament.gv.at/Filter/api/filter/data/101?js=eval&showAll=true')
	) {
		return next(request);
	}
	const cachedResponse = cache.get(request);
	console.log(cache, cachedResponse);
	if (cachedResponse) {
		return of(cachedResponse.clone());
	}

	return next(request).pipe(
		tap(response => {
			if (response instanceof HttpResponse) {
				cache.set(request, response.clone());
			}
		})
	);
};
