import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPartitionsComponent } from './partitions/list-partitions/list-partitions.component';
import { PartitionComponent } from './partitions/partition/partition.component';
import { PartitionUploadComponent } from './partitions/partition-upload/partition-upload.component';
import { LoginComponent } from './user/login/login.component';
import { SigninComponent } from './user/signin/signin.component';
import { SettingsComponent } from './user/settings/settings.component';


const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'signin', component: SigninComponent},
  { path:'settings', component: SettingsComponent},
  { path:'partitions', component: ListPartitionsComponent},
  { path:'partitions/upload', component: PartitionUploadComponent},
  { path:'partitions/:id', component: PartitionComponent},
  { path: '**',
    redirectTo: '/partitions',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
