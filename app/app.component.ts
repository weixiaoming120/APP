import { Component } from '@angular/core';
import { LocalstorageService } from '../app/services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  obj = new LocalstorageService();
  tolist = [];
  content = '';
  i=0;


  idx:number;
  getI(ww){
    this.idx = ww;
  }
 
  add(){
    //将数据添加到正在进行
    if(this.content == ''){
      alert("您输入的数值不能为空值");
      return false;
    }else{
      this.tolist.push(this.content);
     this.obj.setItem('todolist',this.tolist);
    }
     console.log("2");
      this.content = '';
  }
  
}
