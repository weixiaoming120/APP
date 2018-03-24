import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { LocalstorageServiceComponent } from './localstorage-service/localstorage-service.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    AComponent,
    BComponent,
    LocalstorageServiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LocalstorageServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
