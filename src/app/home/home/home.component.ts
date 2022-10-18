import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AxeService } from 'src/app/service/axe.service';
import { Axe } from 'src/app/service/axe.model';
import { HttpClient } from '@angular/common/http';
import { CountryComponent } from './country/country.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],



})
export class HomeComponent  implements OnInit{



countri:any;
 countries: any;
// @Input() ngoptions!:CountryComponent["ngOption"];


  form: FormGroup;
axe:Axe={

  client: '',
  country: '',
  date : '',
  file : null,
  name: ''
}

  submitted!: boolean;
date!:DatePipe;
  constructor(private axeService:AxeService , public fb: FormBuilder, private http: HttpClient,public datepipe: DatePipe) {
    this.form = this.fb.group({
      client: [''],
      country: [''],
      file : [''],
      date : ['']
    });

  }

  ngOnInit(): void {
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file')?.setValue(file);
    }
  }

  onchange(event:any){
    this.countri=event
   // console.log(event)
  }

 saveTutorial() {
  let latest_date =this.datepipe.transform(this.form.get('date')?.value, 'yyyy/MM/dd');
  console.log(latest_date);
  var formData = new FormData()
  formData.append("client", this.form.get('client')?.value);
  formData.append('country', this.countri);
  formData.append('date', latest_date != null ? latest_date : "2022/02/02" );
  formData.append('file',  this.form.get('file')?.value);


  this.http
  .post('http://localhost:8084/upload', formData).subscribe( res => {
    console.log(res)
  });

  }

  ngOption = [
    {name:'tunisie'},
    {name:'canada'}, {name:'usa'}, {name:'dubai'}
    , {name:'morroc'}, {name:'amesterdam'}, {name:'abou dhabi'}
    , {name:'United Arab Emirates'},
    {name:'Ukraine'}, {name:'Angola'}, {name:'Argentina'}
    , {name:'Australia'}, {name:'Bahamas'}, {name:'chad'}, {name:'indien'}, {name:'kuwait'}, {name:'france'}
  ]
  selected: any;
}




