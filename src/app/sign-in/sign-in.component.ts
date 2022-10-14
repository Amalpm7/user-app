import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private myrouter:Router) { }
  name=""
  password=""
  readValues=()=>{
    let data={
     "name":this.name,
     "password":this.password 
    }
    if ( this.name=="admin" && this.password=="12345") {
      this.myrouter.navigate(["/dash"])
      
    } else { alert("Invalid credentials")
      
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
