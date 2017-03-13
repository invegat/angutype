import { Component } from '@angular/core';
import { ProductService } from './product-service';

@Component({
  providers: [ProductService],
  templateUrl: '../main-form/main-form.component.pug'
})
export class MainWithServiceComponent {
  protected productTitle: string;
  protected productPrice: string;
  constructor(private productService: ProductService) { }
  protected getProductByID(formValue: any) {
    this.productService.getProductByID(formValue.productID)
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
