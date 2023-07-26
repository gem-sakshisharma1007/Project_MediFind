import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  // navigateToShop(): void {
  //   this.router.navigate(['/user-website/shop']);
  // }
  logout(): void {
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
  login(): void {
    // Redirect to the login page
    this.router.navigate(['/signup']);
  }


}
