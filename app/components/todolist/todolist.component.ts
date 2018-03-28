import { Component,Optional ,OnInit ,Input , Output,EventEmitter, } from '@angular/core';


@Component({
  selector: 'app-record',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class RecordComponent implements OnInit {

  constructor( ) {

  }

  @Input( ) tolist:Array<any>;
  @Output() getIndex=new EventEmitter();
	

  ngOnInit() {
  }

  comlist = [];
  content = '';
  changeDataone(i){
    
//删除正在进行的数据,i表示删除的数据，1表示true
    this.tolist.splice(i,1);
    // 将数据从正在进行添加到已经完成
    this.comlist.push(this.tolist[i]);
   
    //  this.remove('data');


  }
//点击删除按钮时删除数据
  deleteone(i){
    this.tolist.splice(i,1);
  }
  changeDatatwo(i){
    // 将数据从已经完成添加到正在进行
    this.tolist.push(this.comlist[i]);
    //删除正在进行的数据,i表示删除的数据，1表示true
    this.comlist.splice(i,1);
  }
  deletetwo(i){
    this.comlist.splice(i,1);
  }
  fn(i){
    this.getIndex.emit(i);
  }

}
