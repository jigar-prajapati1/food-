import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
food!: Foods;
rate=3;
  max=5;
  constructor(private activatedroute:ActivatedRoute,
    private foodservice:FoodService,
    private cartservice:CartService,
    private router:Router){
    activatedroute.params.subscribe((params )=>{
      if(params['id'])
      this.food=foodservice.getFoodById(params['id'])
    })
  }
  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
