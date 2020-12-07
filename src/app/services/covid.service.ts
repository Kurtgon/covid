import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }


  //Método devuelve los resultados generales consumiendo la api (https://api.covid19api.com/summary
  listGeneral(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(map(response=> {
      return response['Global'];
    }));
  }

  //Método devuelve los resultados de todos los países consumiendo la api (https://api.covid19api.com/summary
  listCountries(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(map(response=> {
      return response['Countries'];
    }));
  }

  //Método devuelve los resultados de España consumiendo la api (https://api.covid19api.com/summary
  listSpain(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(map(response=> {
      return response['Countries'].filter(country => {
        return country.Country === 'Spain';
      });
    }));
  }

}
