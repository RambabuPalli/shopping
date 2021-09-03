import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'shopping';
  msg:any;
  val="";
  items:Observable<any>;
  constructor(private _service:ItemsService){
    this.items= this._service.get_data();

  }

  cart(data:any)
  {

    this._service.add_data(data).subscribe
    (
      res=>{this.msg=res}
    )

  }

  search(cat_val:string)
  {

    if(cat_val!=='All')
    {
      this.items=this._service.filter_data(cat_val)
    }
    else
    {
      this.items= this._service.get_data();

    }


  }
}
