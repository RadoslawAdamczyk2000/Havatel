import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  content='Cernuus barba qui. Canonicus iure voluptates. Bis tibi quam. Molestiae enim solutio. Soluta aiunt amplexus. Laborum qui cupio. Assentator eaque asc...'
  name='Radosław Adamczyk'
  title='Templum sufficio creber dapifer in cursus vir'
  constructor() { }

  ngOnInit(): void {
  }

}
