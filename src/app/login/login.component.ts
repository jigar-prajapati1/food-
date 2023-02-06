import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login=this.fb.group({
  email:['',Validators.required],
  password:['',Validators.required]
 })
constructor(private fb:FormBuilder,private helper:HelperService,private route:Router){}
ngOnInit(): void {
  
}
onsubmit()
{
  this.helper.getuser().subscribe(res=>{
      // console.log(res)
      let users= Object.values(res);
      console.log(users)
    let auth=  users.filter(res=>{
        return res.email == this.login.value.email && res.password == this.login.value.password
      })
      console.log(auth)
      if(auth.length>0)
      {
        this.route.navigate(['home'])        
      }
      else{
        alert('please enter valide informations')
      }
  })
}

}
