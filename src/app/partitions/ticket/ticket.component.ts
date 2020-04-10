import { Component, OnInit } from '@angular/core';
import { Partition } from 'src/app/models/partition.model';
import { PartitionsService } from '../services/partitions/partitions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../services/tickets/tickets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  public partition: Partition;
  private pid: string;

  public form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    comment: ['', Validators.required]
  });


  constructor(
    private partitionService: PartitionsService,
    private ticketsServices: TicketsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public ngOnInit() {
    this.pid = this.route.snapshot.params.id;
    this.partitionService.getPartition(this.pid).subscribe( (partition: Partition) => {
      this.partition = partition;
    });
  }


  public submitTicket() {
    // TODO change idUser with current
    const newTicket: Ticket = {
      ...this.form.value,
      idUser: 'random'
    };

    this.ticketsServices.postTicketFromPartition(newTicket, this.pid).subscribe( (ticket: Ticket) => {
      console.log(ticket);
      this.router.navigate(['/partitions/' + this.pid]);
    });
  }

}
