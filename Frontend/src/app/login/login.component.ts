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
  errorMsg = "";
  invalidUser = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(){

    console.log(this.username);

    if(this.username === "Shubham" && this.password === "dummy"){
      this.invalidUser = false;    
      this.router.navigate(["welcome", this.username, this.password]);
    }
    else if(this.username != "Shubham"){
      this.invalidUser = true;
      this.errorMsg = "Invalid Username";
    }
    else{
      this.invalidUser = true;
      this.errorMsg = "Invalid Password";
    }

  }
}
