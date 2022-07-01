import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
// export class DataService {
//   private REST_API_SERVER = 'http://localhost:3000/products/';


//   constructor(private httpClient: HttpClient) { }

  
//   public sendGetRequest() {
//     return this.httpClient.get<any[]>(this.REST_API_SERVER);
//   }

//   public getItems(id:number){
//     return this.httpClient.get<any[]>(this.REST_API_SERVER + id);
//   }
// }

export class DataService {
  private REST_API_SERVER = 'http://localhost:3000';
  private productsServer = `${this.REST_API_SERVER}/products`;
  private menusServer = `${this.REST_API_SERVER}/menus`;


  constructor(private httpClient: HttpClient) { }

  
  public GetReqToProducts() {
    return this.httpClient.get<any[]>(this.productsServer);
  }

  // get the specific product info fro
  public getProducts(id:number){
    return this.httpClient.get<any[]>(`${this.productsServer}/${id}`);
  }

  public GetReqToMenus() {
    return this.httpClient.get<any[]>(this.menusServer);
  }

  public getMenus(id:number){
    return this.httpClient.get<any[]>(`${this.menusServer}/${id}`);
  }
  
  // public addMenus(id:number){
  //   return this.httpClient.get<any[]>(`${this.menusServer}/${id}`);
  // }



}
