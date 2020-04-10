import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPartitionsComponent } from './partitions/list-partitions/list-partitions.component';
import { PartitionComponent } from './partitions/partition/partition.component';
import { PartitionUploadComponent } from './partitions/partition-upload/partition-upload.component';
import { LoginComponent } from './user/login/login.component';
import { SigninComponent } from './user/signin/signin.component';
import { SettingsComponent } from './user/settings/settings.component';
import { TicketComponent } from './partitions/ticket/ticket.component';
import { AuthGuard } from 'src/core/guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'settings', component: SettingsComponent , canActivate: [AuthGuard] },
  { path: 'partitions', component: ListPartitionsComponent},
  { path: 'partitions/upload', component: PartitionUploadComponent, canActivate: [AuthGuard] },
  { path: 'partitions/:id', component: PartitionComponent},
  { path: 'partitions/:id/new_ticket', component: TicketComponent, canActivate: [AuthGuard] },
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
