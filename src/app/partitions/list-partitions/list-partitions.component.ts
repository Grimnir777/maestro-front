import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { PartitionsService } from '../services/partitions/partitions.service';
import { Partition } from 'src/app/models/partition.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-partitions',
  templateUrl: './list-partitions.component.html',
  styleUrls: ['./list-partitions.component.scss']
})
export class ListPartitionsComponent implements OnInit {
  public partitions: Array<Partition> = [];
  public displayedColumns: string[] = ['title', 'author', 'difficulty', 'instruments'];
  public dataSource: MatTableDataSource<Partition>;
  public offset = 0;
  public pageSize = 10;

  constructor(
    private partitionsService: PartitionsService,
    private router: Router) {}

  public ngOnInit() {
    this.refreshData();
  }

  private refreshData() {
    this.partitionsService.getPartitions().subscribe( (partitions: Array<Partition>) => {
      this.partitions = partitions;
      this.dataSource = new MatTableDataSource(partitions);
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // TODO Page ticket pour visualiser l'état
  public navigateTo(row) {
    this.router.navigate(['/partitions/' + row._id]);
  }

}
