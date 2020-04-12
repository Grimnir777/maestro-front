import { Component, OnInit } from '@angular/core';
import { Partition } from 'src/app/models/partition.model';
import { PartitionsService } from '../services/partitions/partitions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';
import { FormControl, FormBuilder } from '@angular/forms';
import { Commentaire } from 'src/app/models/commentaire.model';

import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss']
})
export class PartitionComponent implements OnInit {
  public partition: Partition;
  private pid: string;
  public pdfSrc: SafeResourceUrl;
  public downloadUrl : string;
  public comment: FormControl = this.fb.control('');

  constructor(
    private partitionService: PartitionsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.pid = this.route.snapshot.params.id;
    this.partitionService.getPartition(this.pid).subscribe( (partition: Partition) => {
      this.partition = partition;
      this.partitionService.getFileUrl(this.partition.linkPart).subscribe( (url: any) => {
        this.downloadUrl = url.url;
        this.pdfSrc = url.url;
      });
    });
  }

  public newTicket(): void {
    this.router.navigate(['/partitions/' + this.pid + '/new_ticket']);
  }

  public download(): void {
    this.partitionService.downloadFile(this.downloadUrl).subscribe((res: Blob) => {
      console.log(res);
      const blob = new Blob([res], { type: 'application/pdf' });
      fileSaver.saveAs(blob, this.partition.title + '.pdf');
    });
  }

  public submitComment() {
    const comment: Commentaire =  {
      text: this.comment.value,
      idUser: '12',
      pseudoUser: 'Thibaud',
      date: new Date()
    };
    const partitionToUpdate = this.partition;
    partitionToUpdate.comments.push(comment);
    this.partitionService.putPartition(partitionToUpdate).subscribe((result) => {
      this.partition = partitionToUpdate;
      this.comment.reset();
    });

  }

}
