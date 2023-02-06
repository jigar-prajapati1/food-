import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/Cartitem';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart();

  addToCart(food:Foods) :void{
    let cartItem =this.cart.items.find(item => item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id ,cartItem.quantity++)
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item =>item.food.id != foodId)
  }
changeQuantity(foodId:number,quantity:number){
  let cartItem =this.cart.items.find(item => item.food.id === foodId);
  console.log('in services',cartItem)
  if(!cartItem) return;
  cartItem.quantity=quantity;
  console.log('service',cartItem.quantity)
}
getCart():Cart{
console.log(this.cart)
 return this.cart;
}
  
}
