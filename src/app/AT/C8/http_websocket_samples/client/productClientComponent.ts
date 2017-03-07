import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../../app.service';
import { Title } from '../../../../home/title';
import { XLargeDirective } from '../../../../home/x-large';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './productClientComponent.pug'
})
export class ProductClientComponent implements OnInit {
  public title: string = 'Test Product Server';
  public products: string[] = [];
  protected theDataSource: Observable<any>;
  constructor(private http: Http, public route: ActivatedRoute, public appState: AppState,
              public gtitle: Title) {
    this.theDataSource = this.http.get('http://localhost:8000/products')
      .map((res) => res.json());
  }
  public ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      this.title = param['name'] + ': ' + this.title;
    });
    this.theDataSource.subscribe((data) => {
        if (Array.isArray(data)) { this.products = data; } else { this.products.push(data); };
      }
    );
  }
}
