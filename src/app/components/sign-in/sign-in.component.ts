import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private AuthService: AuthService, private router : Router) { }

  ngOnInit(): void {
  }


  signIn (user: User, password: string){
    this.AuthService.signIn(user.email, password);
  }

  signUp (){
    this.router.navigate(['sign-up']);
  }
}
