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
import { BinaryTreeComponent } from './data-structures/binary-tree/binary-tree.component';
import { BinarySearchTreeComponent } from './data-structures/binary-search-tree/binary-search-tree.component';


const routes: Routes = [
  // Sorting
  {path: '', redirectTo: '/insertion-sort', pathMatch: 'full'},
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
  {path: 'binary-tree', component: BinaryTreeComponent},
  {path: 'binary-search-tree', component: BinarySearchTreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
