//从跟模块中引入的根组件
import { Component } from '@angular/core';
import { LocalstorageServiceComponent } from './localstorage-service/localstorage-service.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})




export class AppComponent {
  private todolist:Array<any>;
  private data:Array<any>;
constructor(
  public set:LocalstorageServiceComponent,
  public remove:LocalstorageServiceComponent){}
  
getData(event){
  this.todolist=event;
  this.data=this.todolist;
  //console.log(this.data);
}


}
