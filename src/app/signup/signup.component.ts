import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup=this.fp.group({
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    zip:['',Validators.required]
  })
constructor(private fp:FormBuilder,private helper:HelperService){}
onsubmit()
{
  
  console.log(this.signup)
  this.helper.signp(this.signup.value)
}
}
