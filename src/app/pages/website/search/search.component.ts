import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../_services/master.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  airportLists: any[] = [];

  flightLists: any[] = [];

  fromAirport: number = 0;
  toAirport: number = 0;
  travelDate: string = '';

  passengerObj: any = {
    travelerName: '',
    contactNo: '',
    aadharNo: '',
    seatNo: 0,
  };

  bookingObj: any = {
    flightId: 0,
    customerId: 0,
    bookingDate: new Date(),
    totalAmount: 0,
    FlightBookingTravelers: [],
  };

  passengerLists: any[] = [];

  searchFlightObj: any = {
    fromAirport: 0,
    toAirport: 0,
    travelDate: '',
  };

  constructor(private masterServ: MasterService) {
    const isLocal = localStorage.getItem('FlightCustomer');
    if (isLocal != null) {
      this.bookingObj.customerId = JSON.parse(isLocal).userId;
    }
  }

  ngOnInit(): void {
    this.loadAirports();
  }

  addPassenger() {
    console.log('Passenger add clicked');

    const obj = JSON.stringify(this.passengerObj);
    const newObj = JSON.parse(obj);
    this.passengerLists.push(newObj);
  }

  bookConfirm() {
    console.log('Booking to Conform,,');
    this.bookingObj.FlightBookingTravelers = this.passengerLists;
    this.masterServ.bookingConfirm(this.bookingObj).subscribe((res: any) => {
      console.log('Booking Confirmed Datas', res);
      if (res.result) {
        alert('Booking Confirmed, Thank You');
        this.closeModal();
      } else {
        alert(res.message);
      }
    });
  }

  onBook(flightId: number) {
    this.bookingObj.flightId = flightId;
    console.log('Book now clicked');
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  loadAirports() {
    this.masterServ.getAllAirports().subscribe((res: any) => {
      // console.log('searchAirportcheck',res);
      if (res.result) {
        this.airportLists = res.data;
      } else {
        alert(res.message);
      }
    });
  }

  searchAllFlight() {
    this.masterServ
      .searchAirport(
        this.searchFlightObj.fromAirport,
        this.searchFlightObj.toAirport,
        this.searchFlightObj.travelDate
      )
      .subscribe((res: any) => {
        // console.log('searchgetdata', res);
        this.flightLists = res.data;
      });
  }
}
