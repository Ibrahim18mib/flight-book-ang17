import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../_services/master.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
  host: { ngSkipHydration: 'false' },
})
export class CityComponent implements OnInit {
  cityLists: any[] = [];

  constructor(private cityServ: MasterService) {}

  ngOnInit(): void {
    this.getAllCity();
  }

  // API Endpoint calls
  getAllCity() {
    this.cityServ.getAllCities()
      .subscribe((res: any) => {
        this.cityLists = res.data;
      });
  }

  bulkUpdateCity() {
    this.cityServ.saveCities(this.cityLists)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Bulky City Added');
        } else {
          alert(res.message);
        }
      });
  }

  addNew() {
    const obj = {
      cityId: 0,
      cityName: '',
    };
    this.cityLists.unshift(obj);
  }
}
