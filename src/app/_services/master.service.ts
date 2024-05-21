import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

//LoginCreds
logInn(loginDetails:any){
  return this.http.post('https://freeapi.miniprojectideas.com/api/FlightBooking/Login',loginDetails);
}

//cities
  getAllCities(){
    return this.http
    .get('https://freeapi.miniprojectideas.com/api/FlightBooking/GetAllCity')
  }

  saveCities(cityLists:any){
    return this.http
    .post(
      'https://freeapi.miniprojectideas.com/api/FlightBooking/AddUpdateBulkCity',
      cityLists
    )
  }

//airports

getAllVendors() {
  return this.http
     .get(
       'https://freeapi.miniprojectideas.com/api/FlightBooking/GetAllVendors'
     )
   }


  getAllAirports() {
   return this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/FlightBooking/GetAllAirport'
      )
    }

    saveAirports(airportList:any) {
      return this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/FlightBooking/AddUpdateBulkVendor',
        airportList
      )
       }

       //ALL Flights
       getAllFlights(){
       return this.http.get('https://freeapi.miniprojectideas.com/api/FlightBooking/GetAllFlights')
       }

       saveFlight(flight:any) {
        return this.http
        .post(
          'https://freeapi.miniprojectideas.com/api/FlightBooking/AddUpdateBulkFlights',
          flight
        )
         }
}
