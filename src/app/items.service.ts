import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _http:HttpClient) { }
  get_data()
  {
    return this._http.get("http://localhost:3000/products")
  }

  add_data(data:any)
  {
    console.log(data);
    return this._http.post("http://localhost:3000/cart",{data,"total_cost":data.p_quantity*data.p_cost})
  }

  filter_data(val:string)
  {
    return this._http.get("http://localhost:3000/products?p_category="+val)
  }
}
