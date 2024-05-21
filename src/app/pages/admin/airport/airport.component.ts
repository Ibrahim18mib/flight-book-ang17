import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../_services/master.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.scss',
})
export class AirportComponent implements OnInit {
  AirportsLists: any[] = [];

  constructor(private airportServ: MasterService) {}

  ngOnInit(): void {
    this.getAllAirports();
  }

  //Api Callss starts here
  getAllAirports() {
    this.airportServ.getAllVendors().subscribe((res: any) => {
      // console.log('all airports',res)
      this.AirportsLists = res.data;
    });
  }

  addNew() {
    const obj = {
      vendorId: 0,
      vendorName: '',
      emailId: '',
      customerCareNo: '',
      headeOffice: '',
      logoUrl: '',
    };

    this.AirportsLists.unshift(obj);
  }

  bulkUpdatePort() {
    this.airportServ.saveAirports(this.AirportsLists).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }
}
