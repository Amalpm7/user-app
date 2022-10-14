import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
  name=""
  password=""
  readValues=()=>{
    let data={
     "name":this.name,
     "password":this.password 
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
