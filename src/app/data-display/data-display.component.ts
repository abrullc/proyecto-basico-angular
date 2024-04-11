import { Component, OnInit, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../data.service";

@Component({
  selector: "app-data-display",
  standalone: true,
  templateUrl: "./data-display.component.html",
  styleUrl: "./data-display.component.css"
})
export class DataDisplayComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData();

    this.dataService.data$.subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }
}
