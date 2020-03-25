import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/partitions/services/tickets/tickets.service';
import { Ticket } from 'src/app/models/ticket.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public tickets: Array<Ticket> = [];
  public displayedColumns: string[] = ['title', 'state'];
  public dataSource: MatTableDataSource<Ticket>;
  public offset = 0;
  public pageSize = 10;

  public infos: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    pseudo: new FormControl(''),
    email: new FormControl('')
  });

  public password: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor(
    private ticketsServices: TicketsService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.refreshData();
  }

  private refreshData() {
    this.ticketsServices.getTickets().subscribe((tickets: Array<Ticket>) => {
      console.log(tickets);
      this.tickets = tickets;
      this.dataSource = new MatTableDataSource(tickets);
    });
  }

  public navigateTo(row) {
    this.router.navigate(['/tickets/' + row._id]);
  }
}
