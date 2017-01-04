import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NoResultsComponent } from './no-results/no-results.component';
import { ResultsComponent } from './results/results.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NoResultsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
