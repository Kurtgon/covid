import { Component, OnInit } from '@angular/core';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  
  global: any = '';
  countries: any[] = [];
  spain: any = '';
  
  forInformacion: boolean;
  forGlobal: boolean;

  constructor(private covidService: CovidService) { 
    this.forInformacion = false;
    this.forGlobal = false;
  }

  ngOnInit(): void {

    //Resultados para el listado general
    this.covidService.listGeneral().subscribe(
      (response) => {
        this.global = response;
        console.log(this.global)
      },
      error => {
        console.log(error);
      }
    )

    //Resultados para el listado de paises
    this.covidService.listCountries().subscribe(
      (response) => {
        this.countries = response;
        console.log(this.countries);
      },
      error => {
        console.log(error);
      }
    )

    //Resultados de España
    this.covidService.listSpain().subscribe(
      (response) => {
        this.spain = response;
        console.log(this.spain);
      },
      error => {
        console.log(error);
      }
    )

  }

   //Para activar el componente información y desactivar el componente global
  allInformacion():void{
    this.forInformacion = true;
    this.forGlobal = false;
  }

  //Para activar el componente global y desactivar el componente información
  allGlobal():void{
    this.forInformacion = false;
    this.forGlobal = true;
  }
}


