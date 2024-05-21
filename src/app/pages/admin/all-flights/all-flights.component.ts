import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../_services/master.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrl: './all-flights.component.scss',
})
export class AllFlightsComponent implements OnInit {
  allFlightLists: any[] = [];

  constructor(private flightServ: MasterService) {}
  ngOnInit(): void {
    this.loadFlights();
  }

  //Api strats fetching
  loadFlights() {
    this.flightServ.getAllFlights().subscribe((res: any) => {
      // console.log('Load the Flights',res.data)
      this.allFlightLists = res.data;
    });
  }

  editFlight(id: any) {
    console.log('Edit for Flight');
  }
}
