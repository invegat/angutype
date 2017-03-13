import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './main-form.component.pug'
})
export class MainFormComponent {
  protected productTitle: string;
  protected productPrice: string;
  constructor(private http: Http) { }

  protected getProductByID(formValue: any) {
    this.http.get(`http://localhost:8000/products/${formValue.productID}`)
      .map((res) => res.json())
      .subscribe(
      (data) => {
        this.productTitle = data.title;
        this.productPrice = '$' + data.price;
      },
      (err) => console.log("Can't get product details. Error code %s, URL: %s",
        err.status, err.url),
      () => console.log('Done'));
  }
}
