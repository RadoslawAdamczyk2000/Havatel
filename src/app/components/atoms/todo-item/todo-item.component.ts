import { Component, OnInit } from '@angular/core';
const time = new Date('2022-03-18T00:00:00.000+05:30');
let hour:any = time.getHours();
if(hour < 10){hour = parseInt(`0${hour}`)};
let minute:any = time.getMinutes();
if(minute < 10){minute = parseInt(`0${minute}`)};
let day:any = time.getDate();
if(day < 10){day = parseInt(`0${day}`)};
let month:any = time.getMonth();
if(month < 10){month = '0' + month};
const year = time.getFullYear();
const date = `${hour}:${minute} ${day}/${month}/${year}`;
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  time = date;

  constructor() { }

  ngOnInit(): void {
  }

}
