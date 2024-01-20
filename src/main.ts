import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FileSaverModule } from 'ngx-filesaver';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(BrowserModule, AppRoutingModule, FileSaverModule),
		provideHttpClient(withInterceptorsFromDi()),
	],
}).catch(err => console.error(err));
