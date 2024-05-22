import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  //LoginCreds
  logInn(loginDetails: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/Login',
      loginDetails
    );
  }

  //cities
  getAllCities() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/GetAllCity'
    );
  }

  saveCities(cityLists: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/AddUpdateBulkCity',
      cityLists
    );
  }

  //airports

  getAllVendors() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/GetAllVendors'
    );
  }

  getAllAirports() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/GetAllAirport'
    );
  }

  saveAirports(airportList: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/AddUpdateBulkVendor',
      airportList
    );
  }

  //ALL Flights
  getAllFlights() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/GetAllFlights'
    );
  }

  saveFlight(flight: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/AddUpdateBulkFlights',
      flight
    );
  }

  //Search Datas fetch
  searchAirport(departureId: number, arrivalId: number, travelDate: string) {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/SearchFlight?departureAirportId=' +
        departureId +
        '&arrivalAirportId=' +
        arrivalId +
        '&dateOfTravel=' +
        travelDate
    );
  }

  //search BookNow
  addPassengers(travellerName: any) {
   return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/BookTicket',
      travellerName
    );
  }

  //Booking Confirm API
  bookingConfirm(bookingData:any){
   return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/bookticket',
      bookingData
    );
  }


  //login
  getLogins(loginData:any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/login',loginData
    );
  }

  //register

  getRegister(RegData:any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/register',RegData
    );
  }

  






}
