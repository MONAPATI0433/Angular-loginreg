import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  username: string;
password: string;
confirmpassword: string;

  constructor() { }

  ngOnInit(): void {
  }


  RegisternUser()
{
  if(this.username == "Admin" && this.password == "admin@123" && this.password == "admin@123"){
    console.log('Register User');
  }
}

}
