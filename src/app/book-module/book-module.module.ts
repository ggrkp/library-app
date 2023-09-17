import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookEditComponent } from './book-edit/book-edit.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModuleModule { }
