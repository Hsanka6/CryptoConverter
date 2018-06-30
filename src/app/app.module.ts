import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter/converter.component';
import {CoinApiService} from './services/coin-api.service'

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoinApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
