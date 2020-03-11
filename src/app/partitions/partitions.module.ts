import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPartitionsComponent } from './list-partitions/list-partitions.component';
import { PartitionComponent } from './partition/partition.component';
import { TicketComponent } from './ticket/ticket.component';
import { PartitionUploadComponent } from './partition-upload/partition-upload.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListPartitionsComponent,
    PartitionComponent,
    TicketComponent,
    PartitionUploadComponent
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PartitionsModule { }
