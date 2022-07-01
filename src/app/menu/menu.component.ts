import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [DataService]
})

export class MenuComponent implements OnInit {

  menus: any[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.dataService.GetReqToMenus().subscribe((data: any[]) => {
      this.menus = data;
    });

    this.dataService.getMenus(productIdFromRoute).subscribe((data: any[]) =>{
      this.menus = data;
    });
  }

  menuDetails(itemId: number){
    this.router.navigate(['details/'+itemId])
  }

}
