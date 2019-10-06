import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
import { BinaryTreeComponent } from './data-structures/binary-tree/binary-tree.component';
import { BinarySearchTreeComponent } from './data-structures/binary-search-tree/binary-search-tree.component';
import { RedBlackTreeComponent } from './data-structures/red-black-tree/red-black-tree.component';

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
    BinaryTreeComponent,
    BinarySearchTreeComponent,
    RedBlackTreeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
