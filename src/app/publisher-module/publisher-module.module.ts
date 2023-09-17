import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { PublisherItemComponent } from './publisher-item/publisher-item.component';
import { PublisherEditComponent } from './publisher-edit/publisher-edit.component';



@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherItemComponent,
    PublisherEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublisherModuleModule { }
