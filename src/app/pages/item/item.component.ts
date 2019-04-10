import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;

  constructor( private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros =>{
        //console.log(parametros);
        this.productoService.getProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion)  => {
          this.producto=producto;
          console.log(producto);
        });

      });

  }

}
