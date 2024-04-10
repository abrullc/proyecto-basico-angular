import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


@Component({
  template: "",
  standalone: true,
})

export class DataService {
  data: any[] = [];

  private _data = new BehaviorSubject<any[]>([]);
  data$ = this._data.asObservable();

  constructor(private httpClient: HttpClient) {}

  fetchData(): void {
    this.httpClient
      .get("https://api.sampleapis.com/coffee/hot")
      .subscribe((data: any) => {
        this.data = data;
      });
  }

  addData(newData: any) {
    const currentData = this._data.getValue();
    this._data.next([...currentData, newData]);
    console.log(this.data$)
  }
}
