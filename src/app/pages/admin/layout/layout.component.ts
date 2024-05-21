import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  loggedUserData: any;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    //checking platform/Server details...
    console.log('Platform ID:', this.platformId);
    if (isPlatformBrowser(this.platformId)) {
      console.log('Running in browser environment');
      const localData = localStorage.getItem('FlightVendor');
      console.log('localStorage datainside:', localData);
      if (localData !== null) {
        this.loggedUserData = JSON.parse(localData);
      }
    } else {
      console.log('Running in non-browser environment');
      console.error('localStorage is not available');
      // Handle localStorage not available
    }
  }

  logOff() {
    console.log('logoff clicked');

    localStorage.removeItem('FlightVendor');
    this.router.navigateByUrl('/login');
  }
}
