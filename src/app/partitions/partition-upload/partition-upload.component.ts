import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UploadService } from './upload.service';
import { MatDialog } from '@angular/material/dialog';
import { Partition } from 'src/app/models/partition.model';
import { PartitionsService } from '../services/partitions/partitions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partition-upload',
  templateUrl: './partition-upload.component.html',
  styleUrls: ['./partition-upload.component.scss']
})
export class PartitionUploadComponent {
  // TODO add instruments
  public form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    difficulty: ['', Validators.required]
  });
  constructor(
    public dialog: MatDialog,
    private uploadService: UploadService,
    private partitionsService: PartitionsService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  @ViewChild('fileInput') fileInput;
  public file: File;

  progress;
  uploading = false;
  uploadSuccessful = false;

  public addFiles() {
    this.fileInput.nativeElement.click();
  }

  public onFilesAdded() {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  public submitPartition() {
    this.uploading = true;
    this.progress = this.uploadService.upload(this.file);
    this.progress.subscribe( (fileReturn) => {
      console.log(fileReturn);
      const partition: Partition = this.form.value;
      partition.linkPart = fileReturn.id;
      this.partitionsService.postPartition(partition).subscribe( (result) => {
        console.log(result);
        this.router.navigate(['/partitions/' + result['_id']]);
      });
    });
  }

}
