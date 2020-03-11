import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPartitionsComponent } from './list-partitions/list-partitions.component';
import { PartitionComponent } from './partition/partition.component';
import { TicketComponent } from './ticket/ticket.component';
import { PartitionUploadComponent } from './partition-upload/partition-upload.component';

@NgModule({
  declarations: [ListPartitionsComponent, PartitionComponent, TicketComponent, PartitionUploadComponent],
  imports: [
    CommonModule
  ]
})
export class PartitionsModule { }
