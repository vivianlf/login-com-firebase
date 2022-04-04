import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private authService : AuthService) { }

  ngOnInit(): void {
  }

  signUp (user: User, password: string){
    this.authService.signUp(user, password);
  }

  Return (){
    this.router.navigate(['sign-in']);
  }
}
