import { Component, OnInit, Input ,Optional} from '@angular/core';
import { Router } from '@angular/router';//1.引入 
import { Http,Jsonp , Headers } from '@angular/http';
import "rxjs/Rx"; //引入Rxjs让异步可控更简单




@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public http:Http,public jsonp:Jsonp,@Optional() public router:Router) {
  }
 headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  list:number[] = [1,2,3,4,5];
  ngOnInit() {  
    
    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe( data=>{ 
        console.log(data['_body']);
        this.list = data['_body'];
     },err=>{
      console.log(err);
     });
    

  }
  goDetail(idx){
    this.router.navigate(['/goodsdetail',idx]);
  }
}
