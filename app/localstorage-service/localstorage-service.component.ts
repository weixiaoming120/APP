import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage-service',
  templateUrl: './localstorage-service.component.html',
  styleUrls: ['./localstorage-service.component.css']
})
export class LocalstorageServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  set(a,value){
      localStorage.setItem(a,JSON.stringify(value));
      console.log(JSON.stringify(value));
    
    }
    remove(a){
      localStorage.removeItem(a);
    }
}
