import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-module/book-list/book-list.component';
import { PublisherListComponent } from './publisher-module/publisher-list/publisher-list.component';
import { DashboardComponent } from './dashboard-module/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared-module/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'publishers',
    component: PublisherListComponent,
  },
  {
    path: '**', // Catch-all route for invalid URLs
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// Dashboard , Book List, Publisher List
export class AppRoutingModule {}
