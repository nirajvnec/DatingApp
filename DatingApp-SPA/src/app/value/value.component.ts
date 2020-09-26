import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    const newLocal = 'http://localhost:5000/api/values';
    this.http.get(newLocal).subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
