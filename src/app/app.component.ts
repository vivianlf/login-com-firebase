import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto Final';
  
 user: User;


  constructor(private AuthService: AuthService, private router : Router) { }

  signOut ($event: any): void{
    $event.preventDefault();
    this.AuthService.signOut();
  }

  mostrarNav (): boolean {
    let currentUser = localStorage.getItem('user');
    if(currentUser !== null && currentUser !== '{}'){
      return true;
    }
    return false; 
  }
  
}
