import { Component, OnInit , Input } from '@angular/core';
import { LocalstorageServiceComponent } from '../../localstorage-service/localstorage-service.component';
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
 remove = new LocalstorageServiceComponent;
  constructor() { }
        //正在进行处设置空值
  @Input() todolist;
  ngOnInit() { }
  comlist=[];
  changeDataone(i){
    
//删除正在进行的数据,i表示删除的数据，1表示true
    this.todolist.splice(i,1);
    // 将数据从正在进行添加到已经完成
    this.comlist.push(this.todolist[i]);
    this.remove.remove('todolist');
   
    // this.remove('data');

  }
//点击删除按钮时删除数据
  deleteone(i){
    this.todolist.splice(i,1);
  }
  changeDatatwo(i){
    // 将数据从已经完成添加到正在进行
    this.todolist.push(this.comlist[i]);
    //删除正在进行的数据,i表示删除的数据，1表示true
    this.comlist.splice(i,1);
  }
  deletetwo(i){
    this.comlist.splice(i,1);
  }

 
}
