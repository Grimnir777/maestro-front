import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SettingsComponent, SigninComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
