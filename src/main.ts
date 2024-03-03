import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FileSaverModule } from 'ngx-filesaver';
import { cachingInterceptor } from './app/core/caching.interceptor';
import { apiInterceptor } from './app/core/api.interceptor';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(BrowserModule, AppRoutingModule, FileSaverModule),
		provideHttpClient(withInterceptorsFromDi(), withInterceptors([cachingInterceptor, apiInterceptor])),
	],
}).catch(err => console.error(err));
