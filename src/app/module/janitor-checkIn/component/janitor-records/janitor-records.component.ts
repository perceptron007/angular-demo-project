import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { JanitorRecordsDataSource } from './janitor-records-datasource';

@Component({
  selector: 'app-janitor-records',
  templateUrl: './janitor-records.component.html',
  styleUrls: ['./janitor-records.component.scss'],
})
export class JanitorRecordsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: JanitorRecordsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new JanitorRecordsDataSource(this.paginator, this.sort);
  }
}
