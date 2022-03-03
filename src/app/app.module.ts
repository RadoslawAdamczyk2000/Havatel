import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemComponent } from './components/atoms/nav-item/nav-item.component';
import { UserItemComponent } from './components/atoms/user-item/user-item.component';
import { TodoItemComponent } from './components/atoms/todo-item/todo-item.component';
import { PostItemComponent } from './components/atoms/post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    UserItemComponent,
    TodoItemComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
