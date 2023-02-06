import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
order=this.fb.group({
  name:['',Validators.required],
  number:['',Validators.required],
  address:['',Validators.required],
  city:['',Validators.required],
  state:['',Validators.required],
  zip:['',Validators.required]
})

constructor(private fb:FormBuilder,private route:Router,private helper:HelperService){}
onsubmit()
{
  console.log(this.order)
  this.helper.order(this.order.value);
  

}
}
