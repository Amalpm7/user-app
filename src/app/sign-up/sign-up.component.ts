import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  name=""
  phnNum=""
  gender=""
  email=""
  address=""
  pin=""
  bloodG=""
  dob=""
  age=""
  parent=""
  password=""
  confirmpass=""

  readValue=()=>{
    let data={
      "name":this.name,
      "phnNum":this.phnNum,
      "gender":this.gender,
      "email":this.email,
      "address":this.address,
      "pin":this.pin,
      "bloodG":this.bloodG,
      "dob":this.dob,
      "age":this.age,
      "parent":this.parent,
      "password":this.password,
      "confirmpass":this.confirmpass
    }
    console.log(data)
  }


  ngOnInit(): void {
  }

}
