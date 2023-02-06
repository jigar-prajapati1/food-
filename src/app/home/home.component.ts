import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';


 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[];
  rate=3;
  max=5;
  isReadonly=false;

  constructor(private fs:FoodService, private route:ActivatedRoute)
   {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchitem'])
      this.foods=this.fs.getAll().filter(food =>food.Name.toLowerCase().includes(params['searchitem'].toLowerCase()));
     else if(params['tag'])
     this.foods=this.fs.getAllFoodbytag(params['tag'])
      else
      this.foods=this.fs.getAll();
    })
    
     

    
    
  }

}
