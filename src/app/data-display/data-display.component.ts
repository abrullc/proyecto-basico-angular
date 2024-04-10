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
    this.fetchData();

    this.dataService.data$.subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  fetchData(): any {
    this.httpClient
    .get("https://api.sampleapis.com/coffee/hot")
    .subscribe((data: any) => {
      this.data = data;
    });
  }
}
