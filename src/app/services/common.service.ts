import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  products: any = [
    {
      id: 1,
      name: 'T-shirt',
      price: 400,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/v/5/k/m-st-boxhead-black-smartees-original-imaggegtpgz5dhjj.jpeg?q=70',
      description: 'Men Typography Round Neck Black T-Shirt',
    },
    {
      id: 2,
      name: 'Jeans',
      price: 1800,
      image:
        'https://imagescdn.allensolly.com/img/app/product/7/727319-8065012.jpg?q=75&auto=format&w=342',
      description: 'Men Super Skinny Mid Rise Dark Blue Jeans',
    },
    {
      id: 3,
      name: 'Shirt',
      price: 1200,
      image:
        'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/g/4/g/m-stylish-cotton-shirt-for-men-solstice-original-imagzu85ju4yzkbg.jpeg?q=70',
      description: 'Men Regular Fit Printed Spread Collar Casual Shirt',
    },
    {
      id: 4,
      name: 'Shorts',
      price: 300,
      image:
        'https://www.sporto.in/cdn/shop/products/2_f925b899-9fac-4b04-8637-25acbe31f22c_1728x.jpg?v=1678701196',
      description: 'Printed Men orange Sports Shorts',
    },
    {
      id: 5,
      name: 'Shoes',
      price: 2000,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/g/i/g/10-rng-2021-blu-orng-44-bruton-blue-orange-original-imagdzcpzhscxwhg-bb.jpeg?q=70',
      description: 'Trendy Sports Running Running Shoes For Men  (Blue, Orange)',
    },
    {
      id: 6,
      name: 'Tie',
      price: 600,
      image:
        'https://rukminim1.flixcart.com/image/612/612/k4lmv0w0/tie/h/v/e/free-yhytgghh67-sunshopping-original-imafb9x8cgxrw5ue.jpeg?q=70',
      description: 'Nice Tie for office and party.',
    },
  ];
  cartData: any = [];
  public cartChange: BehaviorSubject<any> = new BehaviorSubject<Boolean>(
    false
  );

  constructor() {}

  addToCart(data: any) {
    this.cartData = data;
    this.cartChange.next(true);
  }
}