import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {
user: User;

  constructor(private authService : AuthService, private router : Router) { 
    this.user = JSON.parse(localStorage.getItem('user') || "{}");
  }

  ngOnInit(): void {
  }

  signOut ($event: any): void{
    $event.preventDefault();
    this.authService.signOut();
  }

}
