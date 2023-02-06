import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  food:any;
  constructor(private http:HttpClient,private route:Router,private cart:CartService) { }
  order(data:any)
  {
   let food=Object.values(this.cart.getCart());

   let order= Object.assign(food,data)
   console.log(order)
   this.http.post('http://localhost:3000/order',order).subscribe(res=>{
     console.log(res)
   alert('order successfully');
   this.route.navigate(['home'])

   })
  }
  getuser()
  {
    return this.http.get('http://localhost:3000/users');
  }
  signp(data:any)
  {
    this.http.post('http://localhost:3000/users',data).subscribe(res=>
    {
      console.log(res)
      this.route.navigate(['home'])
    });
  }
}
