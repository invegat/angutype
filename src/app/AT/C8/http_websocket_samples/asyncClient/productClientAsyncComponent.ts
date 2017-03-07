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
  templateUrl: './productClientAsyncComponent.pug'
})
export class ProductClientAsyncComponent implements OnInit {
  public title: string = 'Test Async Product Server';
  public products: Observable<string[]>;
  constructor(private http: Http, public route: ActivatedRoute, public appState: AppState,
              public gtitle: Title) {
    this.products = this.http.get('http://localhost:8000/products')
      .map((res) => res.json());
  }
  public ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      this.title = param['name'] + ': ' + this.title;
    });
  }
}
