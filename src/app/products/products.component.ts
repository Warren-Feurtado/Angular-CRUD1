import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: any[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.dataService.GetReqToProducts().subscribe((data: any[]) => {
      this.products = data;
    });

    this.dataService.getProducts(productIdFromRoute).subscribe((data: any[]) =>{
      this.products = data;
    });
  }

  prodDetails(itemId: number){
    this.router.navigate(['details/'+itemId])
  }

}
