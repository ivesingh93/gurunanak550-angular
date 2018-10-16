import {Component, OnInit, ViewChild} from '@angular/core';
import {RestService} from "../../../shared/rest.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from '@angular/cdk/collections';

export interface Query{
  query_id: number,
  full_name: string,
  email: string,
  organization_name: string,
  query: string,
  query_date: string
}

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'query_id', 'full_name', 'email', 'organization_name', 'query', 'query_date'];
  selection = new SelectionModel<Query>(true, []);
  queries: Query[];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedRow;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getQueries()
      .subscribe(queries => this.extractQueries(queries));
  }

  onSubmit(){
    console.log(this.selection.selected);
    this.restService.updateQueriesStatus(this.selection.selected)
      .subscribe(data => location.reload());
  }

  private extractQueries(queries){
    this.queries = queries;
    this.dataSource = new MatTableDataSource<Query>(this.queries);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  //
  // rowClicked(index, row){
  //   this.selectedRow = row;
  //   console.log(this.selectedRow);
  // }

}
