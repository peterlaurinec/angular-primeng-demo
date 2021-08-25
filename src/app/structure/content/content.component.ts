import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/services/productservice';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  productDialog!: boolean;

  products!: Product[];

  product!: Product;

  selectedProducts!: Product[];

  submitted!: boolean;

  statuses!: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().then(data => this.products = data);

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(val => val.id !== product.id);
    this.product = {};
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete ' + product.name + '?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.products = this.products.filter(val => val.id !== product.id);
    //     this.product = {};
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    //   }
    // });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }
}
