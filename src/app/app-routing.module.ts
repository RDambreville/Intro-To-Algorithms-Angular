import { InsertionSortComponent } from './sorting/insertion-sort/insertion-sort.component';
import { RadixSortComponent } from './sorting/radix-sort/radix-sort.component';
import { CountingSortComponent } from './sorting/counting-sort/counting-sort.component';
import { HeapSortComponent } from './sorting/heap-sort/heap-sort.component';
import { QuickSortComponent } from './sorting/quick-sort/quick-sort.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'insertion-sort', component: InsertionSortComponent},
  {path: 'quick-sort', component: QuickSortComponent},
  {path: 'heap-sort', component: HeapSortComponent},
  {path: 'counting-sort', component: CountingSortComponent},
  {path: 'radix-sort', component: RadixSortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
