import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { notificationType } from 'src/app/enum/notificationType';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})

export class CartComponent implements OnInit {
  cartData: any = [];
  totalAmount: number = 0;
  dataSource!: MatTableDataSource<any>;

  constructor(private _commonService: CommonService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.cartData = this._commonService.cartData;
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.data = [];
    this.calculateTotal();
  }

  incrementQuantity(item: any) {
    item.quantity++;
    this.calculateTotal();
    this._commonService.addToCart(this.cartData);
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();
      this._commonService.addToCart(this.cartData);
    }
  }

  calculateTotal() {
    let total = 0;
    this.cartData.forEach((item: any) => {
      total += item.quantity * item.price;
    });
    this.totalAmount = total;
    this.dataSource.data = this.cartData;
  }

  deleteFromCart(item: any) {
    const index = this.cartData.indexOf(item);
    if (index >= 0) {
      this.cartData.splice(index, 1);
      this.calculateTotal();
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 2000,
        data: {
          type: notificationType.Success,
          message: 'Item deleted from cart.',
        },
      });
      this._commonService.addToCart(this.cartData);
    }
  }
}
