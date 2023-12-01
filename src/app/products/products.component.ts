import {Component, OnInit} from '@angular/core';
import {CakeService} from "../services/cake.service";
import {CakeModel} from "../cakes/Cake.Model";
import {NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ProductService} from "../services/product.service";
import {IngredientModel} from "../ingredients/Ingredient.Model";
import {ProductModel} from "./product.Model";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  data: any;


  constructor(private service: ProductService) {
  }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data => this.data = data);
    console.log(this.data);
  }

  onSubmit(productForm: NgForm) {
    let product = new ProductModel();
    product.ProductName = productForm.value.name;
    product.ProductNumber = productForm.value.prodid;

    this.service.addProduct(product).subscribe((response) => {console.log(response); this.ngOnInit()})
  }

  deleteProduct(id: string) {
    this.service.deleteProduct(id).subscribe((response) =>
    {console.log(response), this.ngOnInit()});
  }





}
