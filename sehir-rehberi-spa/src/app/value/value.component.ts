import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Value } from '../models/value';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
  values: Value[] = [];
  model: Value = new Value();

  ngOnInit() {
    this.getValues().subscribe(data => {
      this.values = data;
      console.log(data);
    });
  }

  getValues() {
    return this.http.get<Value[]>("https://localhost:44371/api/values")
  }
}
