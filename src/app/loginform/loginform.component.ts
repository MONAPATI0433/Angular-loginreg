import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {


username: string;
password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

LoginUser()
{
  if(this.username == "Admin" && this.password == "admin@123"){
    this.router.navigate(['/home']);
  }
}
// gotoHome(){
//   this.router.navigate(['/home']);  // define your component where you want to go
// }

}
