import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PDFExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
