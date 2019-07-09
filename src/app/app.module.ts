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
import { RadixSortComponent } from './sorting/radix-sort/radix-sort.component';
import { StackComponent } from './data-structures/stack/stack.component';
import { QueueComponent } from './data-structures/queue/queue.component';
import { LinkedListComponent } from './data-structures/linked-list/linked-list.component';
import { BinaryTreeComponent } from './data-structures/linked-list/binary-tree/binary-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertionSortComponent,
    MergeSortComponent,
    HeapSortComponent,
    QuickSortComponent,
    SortingComponent,
    CountingSortComponent,
    RadixSortComponent,
    StackComponent,
    QueueComponent,
    LinkedListComponent,
    BinaryTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
