import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  subs = new SubSink();
  isNavActive = false;
  cartAddedCount: number = 0;

  constructor(private _commonService: CommonService) {}

  ngOnInit(): void {
    this.subs.add(
      this._commonService.cartChange.subscribe((data) => {
        if (data) {
          this.cartAddedCount = 0;
          // this.cartAddedCount = this._commonService.cartData.length;
          this._commonService.cartData.map((x: any) => {
            this.cartAddedCount = this.cartAddedCount + x.quantity;
          });
        }
      })
    );
  }

  toggleNav() {
    this.isNavActive = !this.isNavActive;
  }
}
