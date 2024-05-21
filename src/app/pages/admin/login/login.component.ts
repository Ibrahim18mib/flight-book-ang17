import { Component } from '@angular/core';
import { MasterService } from '../../../_services/master.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj: any = {
    email: 'rahul@dummy.com',
    password: 'Pune',
  };

  constructor(private logServ: MasterService, private router: Router) {}

  onLogin() {
    console.log('login objcts', this.loginObj);
    this.logServ.logInn(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('FlightVendor', JSON.stringify(res.data));
        console.log('login objcts', res.data);
        this.router.navigateByUrl('/city');
      } else {
        alert(res.message);
      }
    });
  }
}
