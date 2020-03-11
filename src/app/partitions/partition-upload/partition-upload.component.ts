import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

}
