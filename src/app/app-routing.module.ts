import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertionSortComponent } from './sorting/insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './sorting/merge-sort/merge-sort.component';
import { RadixSortComponent } from './sorting/radix-sort/radix-sort.component';
import { CountingSortComponent } from './sorting/counting-sort/counting-sort.component';
import { HeapSortComponent } from './sorting/heap-sort/heap-sort.component';
import { QuickSortComponent } from './sorting/quick-sort/quick-sort.component';
import { StackComponent } from './data-structures/stack/stack.component';
import { QueueComponent } from './data-structures/queue/queue.component';
import { LinkedListComponent } from './data-structures/linked-list/linked-list.component';
import { BinaryTreeComponent } from './data-structures/linked-list/binary-tree/binary-tree.component';

const routes: Routes = [
  // Sorting
  {path: 'insertion-sort', component: InsertionSortComponent},
  {path: 'merge-sort', component: MergeSortComponent},
  {path: 'quick-sort', component: QuickSortComponent},
  {path: 'heap-sort', component: HeapSortComponent},
  {path: 'counting-sort', component: CountingSortComponent},
  {path: 'radix-sort', component: RadixSortComponent},

  // Data Structures
  {path: 'stack', component: StackComponent},
  {path: 'queue', component: QueueComponent},
  {path: 'linked-list', component: LinkedListComponent},
  {path: 'binary-tree', component: BinaryTreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
