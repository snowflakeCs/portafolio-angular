import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  cargando= true;
  productos: ProductoInterface[]= [];

  constructor( private http: HttpClient) { 

    this.cargarProductos();
  }

  private cargarProductos(){

    this.http.get('https://angular-html-db4c9.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterface[]) => {
        //console.log(resp);
        this.cargando=false;
        this.productos=resp;

      } );
  }

  public getProducto( id: string){
    return this.http.get('https://angular-html-db4c9.firebaseio.com/productos/${id}.json')
  }

}
