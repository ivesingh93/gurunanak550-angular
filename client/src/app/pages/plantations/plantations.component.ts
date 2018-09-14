import {Component, OnInit, ViewChild} from '@angular/core';
import {RestService} from "../../shared/rest.service";
import {MatTableDataSource, MatPaginator, MatSort} from "@angular/material";
import {SelectionModel} from '@angular/cdk/collections';

export interface Location {
  full_name: string,
  location: string,
  organization_name: string,
  total_trees_planted: number,
  plants_types: string,
  remarks: string,
  date_planted: string
}

@Component({
  selector: 'app-plantations',
  templateUrl: './plantations.component.html',
  styleUrls: ['./plantations.component.css']
})
export class PlantationsComponent implements OnInit {

  displayedColumns: string[] = ['full_name', 'location', 'organization_name', 'total_trees_planted', 'plants_types', 'remarks', 'date_planted'];
  locationsData: Location[];
  dataSource;
  selection = new SelectionModel<Location>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedLat: number;
  selectedLng: number;
  selectedRow;
  imageUrlArray = ["https://images.all-free-download.com/images/graphiclarge/flower_pot_plants_02_hd_pictures_169218.jpg",
    "https://images.all-free-download.com/images/graphiclarge/flower_flowers_plant_218214.jpg",
    "https://images.all-free-download.com/images/graphiclarge/flower_209610.jpg"
  ];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getLocations("Pending")
      .subscribe(locations => this.extractLocationsData(locations));
  }

  private extractLocationsData(locations){
    this.locationsData = locations;
    this.dataSource = new MatTableDataSource<Location>(this.locationsData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  rowClicked(index, row){
    this.selectedRow = row;
    this.selectedRow['index'] = index;
    this.selectedLat = Number(row.latitude);
    this.selectedLng = Number(row.longitude);
  }

  onSubmit(approved: boolean){
    this.restService.updatePlantationRecord(this.selectedRow.id, approved)
      .subscribe(data => console.log(data));

    this.dataSource.data.splice(this.selectedRow['index'], 1);
    this.dataSource.paginator = this.paginator;
  }

}
