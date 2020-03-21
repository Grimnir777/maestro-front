import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/models/ticket.model';

const ticketUrl = 'http://localhost:3000/tickets/';
const partitionsUrl = 'http://localhost:3000/partitions/';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  /**
   * getTickets
   */
  public getTickets() {
    return this.http.get<Array<Ticket>>(ticketUrl);
  }

  /**
   * postTicketFromPartition
   */
  public postTicketFromPartition(ticket: Ticket, partitionId: string) {
    return this.http.post<object>(partitionsUrl + partitionId + '/tickets', ticket);
  }

  /**
   * getTicket
   */
  public getTicket(id: string) {
    return this.http.get<Ticket>(ticketUrl + id);
  }

  /**
   * deleteTicket
   */
  public deleteTicket(id: string) {
    return this.http.delete<boolean>(ticketUrl + id);
  }

}
