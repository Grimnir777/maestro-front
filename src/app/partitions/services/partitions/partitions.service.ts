import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partition } from 'src/app/models/partition.model';
import { Ticket } from 'src/app/models/ticket.model';

const url = 'http://localhost:3000/partitions/';
const fileUrl = 'http://localhost:3000/partition-file/';

@Injectable({
  providedIn: 'root'
})
export class PartitionsService {

  constructor(private http: HttpClient) { }

  /**
   * getPartitions
   */
  public getPartitions() {
    return this.http.get<Array<Partition>>(url);
  }

  /**
   * postPartition
   */
  public postPartition(partition: Partition) {
    return this.http.post<object>(url, partition);
  }

  /**
   * putPartition
   */
  public putPartition(partition: Partition) {
    return this.http.put<object>(url, partition);
  }

  /**
   * getPartition
   */
  public getPartition(id: string) {
    return this.http.get<Partition>(url + id);
  }

  /**
   * getFileUrl
   */
  public getFileUrl(id: string) {
    const res = this.http.get<any>(fileUrl + id);
    console.log(res);
    return res;
    // return this.http.get<any>(fileUrl + id);
  }

  /**
   * getFile
   */
  public getFile(id: string) {
    return this.http.get(fileUrl + id , {responseType: 'blob'});
  }
}
