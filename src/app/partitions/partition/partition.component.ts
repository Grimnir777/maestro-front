import { Component, OnInit } from '@angular/core';
import { Partition } from 'src/app/models/partition.model';
import { PartitionsService } from '../services/partitions/partitions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss']
})
export class PartitionComponent implements OnInit {
  public partition: Partition;
  private pid: string;
  public pdfSrc: SafeResourceUrl;
  constructor(
    private partitionService: PartitionsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.pid = this.route.snapshot.params.id;
    this.partitionService.getPartition(this.pid).subscribe( (partition: Partition) => {
      console.log(partition);
      this.partition = partition;
      // FIXME file with url
      // this.partitionService.getFileUrl(this.partition.linkPart).subscribe( (url: any) => {
      //   console.log(url);
      //   this.pdfSrc = url;
      // });
    });
  }

  public newTicket(): void {
    this.router.navigate(['/partitions/' + this.pid + '/new_ticket']);
  }

}
