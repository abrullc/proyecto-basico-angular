import { Component, OnInit, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../data.service";
import { MatDialog } from "@angular/material/dialog";
import { FormUpdateComponent } from "../form-update/form-update.component";

@Component({
  selector: "app-data-display",
  standalone: true,
  templateUrl: "./data-display.component.html",
  styleUrl: "./data-display.component.css",
})
export class DataDisplayComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.dataService.fetchData();

    this.dataService.data$.subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  onDelete(coffee: any): void {
    this.dataService.deleteData(coffee);
  }

  onUpdate(coffee: any): void {
    this.openDialog(coffee);
  }

  openDialog(coffee: any): void {
    const dialogRef = this.dialog.open(FormUpdateComponent, {
      width: '250px',
    });

    dialogRef.componentInstance.coffee = coffee;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
