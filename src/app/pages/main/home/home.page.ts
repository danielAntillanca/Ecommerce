import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  utilsSvc = inject(UtilsService);

  products: Product[] = [
    {id:"1", name: "smart tv", image:"", price: 1000000, soldUnits: 2},
    {id:"2", name: "", image: "", price: 1000000, soldUnits: 2},
    {id:"3", name: "", image: "", price: 1000000, soldUnits: 2},
    
  ];

  constructor() { }

  ngOnInit() {
    this.products = [...this.products]
  }

  deleteProduct(id:string){
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      // Si necesitas actualizar la vista inmediatamente
      this.products = [...this.products];
    }
  }

  addUpdateProduct(product?: Product){
    this.utilsSvc.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal',
      componentProps: { product }
    });
  }
}
