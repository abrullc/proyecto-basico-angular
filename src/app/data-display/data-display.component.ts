import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-data-display",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./data-display.component.html",
  styleUrl: "./data-display.component.css"
})
export class DataDisplayComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
    .get("https://api.sampleapis.com/coffee/hot")
    .subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}
