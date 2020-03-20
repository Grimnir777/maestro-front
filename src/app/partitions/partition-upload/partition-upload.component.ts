import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UploadService } from './upload.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-partition-upload',
  templateUrl: './partition-upload.component.html',
  styleUrls: ['./partition-upload.component.scss']
})
export class PartitionUploadComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(public dialog: MatDialog, public uploadService: UploadService) { }

  ngOnInit(): void {
  }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      height: '50%',
    })
  }

}
