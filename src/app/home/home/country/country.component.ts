import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  ngOption = [
    {name:'tunisie',description:''},
    {name:'canada',description:''}, {name:'usa',description:''}, {name:'dubai',description:''}
    , {name:'morroc',description:''}, {name:'amesterdam',description:''}, {name:'amesterdam',description:''}
  ]
  selected: any;

  constructor() { }

  ngOnInit(): void {
  }

}
