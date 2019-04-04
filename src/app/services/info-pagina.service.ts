import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor( private http: HttpClient) { 

    console.log('servicio de Info de pagina cargado');

    this.http.get('assets/data/data-pagina.json')
      .subscribe( resp => {
        console.log( resp); // (resp['twitter'])
      });
  }
}
