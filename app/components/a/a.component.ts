import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { LocalstorageServiceComponent } from '../../localstorage-service/localstorage-service.component';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  get=new LocalstorageServiceComponent();
  constructor() { }
  @Input() arrayData:Array<any>;
  @Output() event = new EventEmitter();
  ngOnInit() { }

  content:string;          //数据是字符串类型
  todolist = [];           //正在进行处设置空值
  // dataA = [];            //已经完成处设置空值
  add(){
    //将数据添加到正在进行
    if(this.content == ''){
      alert("您输入的数值不能为空值");
      return false;
    }else{
      this.todolist.push(this.content);
      this.get.set('todolist',this.todolist);
    }
     
      this.content = '';
      this.event.emit(this.todolist);
  }
  
  

  
  // fn(i){
  //   this.getIndex.emit(i);
  // }
}
