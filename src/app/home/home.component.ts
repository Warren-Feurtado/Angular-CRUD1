import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})


export class HomeComponent implements OnInit {

  products: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {

    // this.dataService.sendGetRequest().subscribe((data: any[]) => {
    //   this.products = data;
    // });
  }

  prodDetails(itemId: number){
    this.router.navigate(['details/' + itemId])
  }

}
