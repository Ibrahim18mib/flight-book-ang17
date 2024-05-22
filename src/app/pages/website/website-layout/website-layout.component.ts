import { Component } from '@angular/core';
import { MasterService } from '../../../_services/master.service';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.scss',
})
export class WebsiteLayoutComponent {
  registerObj: any = {
    name: '',
    mobileNo: '',
    email: '',
    city: '',
    address: '',
    password: '',
  };

  loginObj: any = {
    email: '',
    password: '',
  };

  loggedUserData: any;

  constructor(private masterServ: MasterService) {
    const isLocal = localStorage.getItem('FlightCustomer');
    if (isLocal != null) {
      this.loggedUserData = JSON.parse(isLocal);
    }
  }

  onLogOff() {
    localStorage.removeItem('FlightCustomer');
    this.loggedUserData = undefined;
  }

  onLogin() {
    this.masterServ.getLogins(this.loginObj).subscribe((res: any) => {
      console.log('LoginFetch data', res);
      if (res.result) {
        alert('Loginnn Successfull');
        this.loggedUserData = res.data;
        localStorage.setItem('FlightCustomer', JSON.stringify(res.data));
        this.closeLogin();
      } else {
        alert(res.message);
      }
    });
  }

  onRegister() {
    this.masterServ.getRegister(this.registerObj).subscribe((res: any) => {
      console.log('REgistration post data', res);
      if (res.result) {
        alert('REgistered Successfull');
        this.closeRegister();
      } else {
        alert(res.message);
      }
    });
  }
  openRegister() {
    console.log('registerk now clicked');
    const modal = document.getElementById('registerModel');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  closeRegister() {
    console.log('registerk closed clicked');
    const modal = document.getElementById('registerModel');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  openLogin() {
    console.log('login now clicked');
    const modal = document.getElementById('loginModel');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  closeLogin() {
    console.log('login closed clicked');
    const modal = document.getElementById('loginModel');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
}
