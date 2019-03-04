import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertionSortComponent } from './sorting/insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './sorting/merge-sort/merge-sort.component';
import { HeapSortComponent } from './sorting/heap-sort/heap-sort.component';
import { QuickSortComponent } from './sorting/quick-sort/quick-sort.component';
import { SortingComponent } from './sorting/sorting.component';
import { CountingSortComponent } from './sorting/counting-sort/counting-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertionSortComponent,
    MergeSortComponent,
    HeapSortComponent,
    QuickSortComponent,
    SortingComponent,
    CountingSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
