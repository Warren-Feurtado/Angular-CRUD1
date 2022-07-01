import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [DataService]
})
export class ProductDetailsComponent implements OnInit {

  product: any | undefined;
  menu: any | undefined;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const menuIdFromRoute = Number(routeParams.get('menuId'));

   
    // this.dataService.sendGetRequest().subscribe((data: any[]) =>{
    //   this.products = data;
    // });

    if(productIdFromRoute){
       // Find the product that correspond with the id provided in route.
      this.dataService.getProducts(productIdFromRoute).subscribe((data: any) =>{
        console.log(data)
        this.product = data
      });
   
    }else if(menuIdFromRoute){
        // Find the menu that correspond with the id provided in route.
      this.dataService.getMenus(menuIdFromRoute).subscribe((data: any) =>{
        console.log(data)
        this.menu = data
      });
    }
  
  }

}
