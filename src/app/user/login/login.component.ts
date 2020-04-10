import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    pseudo: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * login
   */
  public login() {
    this.authService.login(this.form.value.pseudo, this.form.value.password).then(res => {
      if (res) {
        this.router.navigate(['']);
      } else {
        console.log('error credentials');
      }
    });
  }

}
