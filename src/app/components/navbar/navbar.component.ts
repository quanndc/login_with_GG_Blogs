import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(protected authService: AuthService, private router: Router) { 
    console.log(this.authService.user)
  }

  navigateToLogin(){
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
