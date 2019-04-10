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

    return new Promise ( ( resolve , reject ) => {
      this.http.get('https://angular-html-db4c9.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterface[]) => {
        //console.log(resp);
        this.cargando = false;
        this.productos = resp;
        resolve();
      } );
    })
    
  }

   getProducto( id: string){
    return this.http.get('https://angular-html-db4c9.firebaseio.com/productos/${id}.json')
  }

  buscarProducto( termino: string){
    if ( this.productos.length === 0){
      this.cargarProductos().then(()=>{
        //ejecturar despues de tener productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    
    }else {
      //aplicar filtro
      this.filtrarProductos(termino);
    }
  }

private filtrarProductos( termino: string) {

  console.log(this.productos);
  this.productoFiltrado = [];
  
  this.productos.forEach( prod =>{

    if (prod.categoria.indexOf( termino) >= 0){
      this.productoFiltrado.push(prod);
    }
  })
}

}
