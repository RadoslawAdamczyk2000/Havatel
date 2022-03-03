import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  image = '../../../../assets/images/male.png';
  name = 'Radosław Adamczyk'
  email='radoslaw.adamczyk2000@gmail.com'
  status = 'active'
  constructor() { }

  ngOnInit(): void {
  }

}
