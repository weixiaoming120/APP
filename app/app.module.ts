import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecordComponent } from './components/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { LocalstorageService } from './services/localstorage.service';



@NgModule({
  declarations: [
    AppComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
