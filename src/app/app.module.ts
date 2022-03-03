import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemComponent } from './components/atoms/nav-item/nav-item.component';
import { UserItemComponent } from './components/atoms/user-item/user-item.component';
import { TodoItemComponent } from './components/atoms/todo-item/todo-item.component';
import { PostItemComponent } from './components/atoms/post-item/post-item.component';
import { ContentPostComponent } from './components/atoms/content-post/content-post.component';
import { CommentPostComponent } from './components/atoms/comment-post/comment-post.component';
import { PostComponent } from './components/bacterias/post/post.component';
import { UsersComponent } from './components/bacterias/users/users.component';
import { NavigationComponent } from './components/bacterias/navigation/navigation.component';
import { PostsComponent } from './components/bacterias/posts/posts.component';
import { TodosComponent } from './components/bacterias/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    UserItemComponent,
    TodoItemComponent,
    PostItemComponent,
    ContentPostComponent,
    CommentPostComponent,
    PostComponent,
    UsersComponent,
    NavigationComponent,
    PostsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
