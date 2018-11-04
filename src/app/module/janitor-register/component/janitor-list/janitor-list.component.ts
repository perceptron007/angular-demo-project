import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { JanitorListDataSource } from './janitor-list-datasource';

@Component({
  selector: 'app-janitor-list',
  templateUrl: './janitor-list.component.html',
  styleUrls: ['./janitor-list.component.scss'],
})
export class JanitorListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: JanitorListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new JanitorListDataSource(this.paginator, this.sort);
  }
}
