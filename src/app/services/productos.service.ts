import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  cargando = true;
  productos: ProductoInterface[]= [];
  productoFiltrado: ProductoInterface[]= [];

  constructor( private http: HttpClient) { 

    this.cargarProductos();
  }

  private cargarProductos(){

    this.http.get('https://angular-html-db4c9.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterface[]) => {
        //console.log(resp);
        this.cargando = false;
        this.productos = resp;

      } );
  }

   getProducto( id: string){
    return this.http.get('https://angular-html-db4c9.firebaseio.com/productos/${id}.json')
  }

  buscarProducto( termino: string){
    this.productoFiltrado = this.productos.filter( producto => {
      return true;
    });

    console.log( this.productoFiltrado);
  }

}
