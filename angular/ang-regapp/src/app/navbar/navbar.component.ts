import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // public-määre mahdollistaa authService-olion käytön suoraan templaatissa.
  // templaattiin haetaan isLoggedIn-muuttujan arvo
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  logOut() {
    this.authService.isLoggedIn = false;
  }
}
