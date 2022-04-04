import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMsg = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(){

    console.log(this.username);

    if(this.username === "Shubham" && this.password === "dummy"){
      this.invalidLogin = false;
      this.router.navigate(["welcome", this.username]);
    }
    else{
      this.invalidLogin = true;
    }

  }
}
