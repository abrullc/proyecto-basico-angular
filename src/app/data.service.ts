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
  private _data = new BehaviorSubject<any[]>([]);
  data$ = this._data.asObservable();

  constructor(private httpClient: HttpClient) {}

  fetchData(): void {
    this.httpClient
      .get("https://api.sampleapis.com/coffee/hot")
      .subscribe((data: any) => {
        this._data.next(data);
      });
  }

  addData(newData: any) {
    const currentData = this._data.getValue();
    currentData.push(newData);
    this._data.next(currentData);
  }

  updateData(newData: any, coffee: any): void {
    const currentData = this._data.getValue();
    currentData[currentData.indexOf(coffee)] = newData;
    this._data.next(currentData);
  }

  deleteData(coffee: any): void {
    const currentData = this._data.getValue();
    currentData.splice(currentData.indexOf(coffee), 1);
    this._data.next(currentData);
  }
}
