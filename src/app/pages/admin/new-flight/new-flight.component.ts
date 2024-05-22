import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../_services/master.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.scss',
})
export class NewFlightComponent implements OnInit {
  airportLists: any[] = [];

  flightObj: any = {
    flightId: 0,
    flightNumber: '',
    departureAirportId: 0,
    departureTime: '',
    arrivalAirportId: 0,
    arrivalTime: '',
    price: 0,
    totalSeats: 0,
    flightVendorId: 0,
    travelDate: '',
  };

  constructor(private airportService: MasterService) {
    const localData = localStorage.getItem('FlightVendor');
    console.log('localStorage datainside:', localData);
    // this.flightObj.flightVendorId = JSON.parse(localData).vendorId;
    this.flightObj.flightVendorId = 2;
  }

  ngOnInit(): void {
    this.getAllAirport();
  }

  getAllAirport() {
    this.airportService.getAllAirports().subscribe((res: any) => {
      // console.log('AirportLists', res);
      if (res) {
        this.airportLists = res.data;
      } else {
        alert('No Airports lists fecthed,,,');
      }
    });
  }

  saveFlightDetails() {
    console.log('creation flights objects', this.flightObj);
    const obj = [];
    obj.push(this.flightObj);
    console.log('arrayu flights objects', obj);

    this.airportService.saveFlight(obj).subscribe((res: any) => {
      if (res.result) {
        alert('Flight Details Saved successfull');
      } else {
        alert(res.message);
      }
    });
  }
}
