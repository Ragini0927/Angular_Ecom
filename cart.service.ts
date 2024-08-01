import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:any[]=[];
//  private cartSubject = new BehaviorSubject<any[]>(this.cartItems);
//  cart$ = this.cartSubject.asObservable();
  constructor() {
    console.log("initial cart item",this.cartItems)
   }

  addItems(item:any){
    console.log("item to be added",item)
    this.cartItems.push(item);
    // this.cartSubject.next(this.cartItems);
    console.log("Cart after adition",this.cartItems)
  }
  getItems(){
    return this.cartItems;
  }
}
