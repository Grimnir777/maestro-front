import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    pseudo: new FormControl(''),
    email: new FormControl(''),
    confirmEmail: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
