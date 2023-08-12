import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@NgModule({
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, PieChartComponent],
})
export class AppModule {}
