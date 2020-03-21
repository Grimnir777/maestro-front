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
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadService } from './partition-upload/upload.service';

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
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [UploadService],
})
export class PartitionsModule { }
