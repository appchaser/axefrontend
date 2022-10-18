import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Axe } from 'src/app/service/axe.model';
import { AxeService } from 'src/app/service/axe.service';
import { ResponseFile } from 'src/app/service/ResponseFile';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  key: any;
  axes: ResponseFile[] = [];
  constructor(private axeService: AxeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.key = params.get('id') || '';
    });
    this.getAxes(this.key);
  }

  public getAxes(key: string): void {

    this.axeService.getAllfilesStream().subscribe(
      (response: ResponseFile[]) => {
        this.axes = response;
        const results: ResponseFile[] = [];
        for (const axe of this.axes) {
          if (axe.country.toLowerCase().indexOf(key.toLowerCase()) !== -1
          || axe.client.toLowerCase().indexOf(key.toLowerCase()) !== -1
          || axe.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
          || axe.contenu.toLowerCase().indexOf(key.toLowerCase()) !== -1
          ) {
            results.push(axe);
          }
        }
        this.axes = results;

        if (key.length===0) {
          this.axes;
        }

        console.log(this.axes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  reloadCurrentPage() {
    window.location.reload();
  }



}
