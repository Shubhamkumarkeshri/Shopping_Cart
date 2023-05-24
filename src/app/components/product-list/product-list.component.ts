import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from 'src/app/services/common.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { notificationType } from 'src/app/enum/notificationType';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any = [];
  productsCopy: any = [];
  cartData: any = [];
  searchText: string = '';

  constructor(
    private _commonService: CommonService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.products = [...this._commonService.products];
    this.productsCopy = [...this._commonService.products];
    this.cartData = this._commonService.cartData;
  }

  addToCart(item: any) {
    if (this.cartData.length === 0) {
      let obj = item;
      Object.assign(obj, { quantity: 1 });
      this.cartData.push(item);
    } else {
      let itemIndex = this.cartData.findIndex((x: any) => x.id === item.id);
      if (itemIndex > -1) {
        this.cartData[itemIndex].quantity++;
      } else {
        let obj = item;
        Object.assign(obj, { quantity: 1 });
        this.cartData.push(item);
      }
    }
    this._commonService.addToCart(this.cartData);
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
      data: {
        type: notificationType.Success,
        message: 'Item added to cart.',
      },
    });
  }

  search(event: any) {
    this.searchText = event.value;
    this.products = this.productsCopy;
    if (this.searchText.length > 0) {
      this.products = this.productsCopy.filter((x: any) =>
        x.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}