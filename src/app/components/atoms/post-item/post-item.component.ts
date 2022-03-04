import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  post = {
    author : 'Radosław Adamczyk',
    excerpt : 'Ultra decipio spes. Suffragium tener maiores. Tenax curto eius. Curriculum cum accommodo. Modi vesper cenaculum. Arbitro viscus deinde. Ante balbus et. Studio benevolentia congregatio. Utor suscipio copiose. Concido vinculum demum. Caecus ut aiunt. Peior umbra barba. Quis est aranea. Et causa velociter. Deleniti asporto assumenda. Cultellus blanditiis cur. Video cado cuppedia. Caritas ceno coepi. Turpis crustulum denego. Deserunt rerum tergum. Sol surgo damno.',
    title : 'Templum sufficio creber dapifer in cursus vir'
  }
  content='Ultra decipio spes. Suffragium tener maiores. Tenax curto eius. Curriculum cum accommodo. Modi vesper cenaculum. Arbitro viscus deinde. Ante balbus et. Studio benevolentia congregatio. Utor suscipio copiose. Concido vinculum demum. Caecus ut aiunt. Peior umbra barba. Quis est aranea. Et causa velociter. Deleniti asporto assumenda. Cultellus blanditiis cur. Video cado cuppedia. Caritas ceno coepi. Turpis crustulum denego. Deserunt rerum tergum. Sol surgo damno.'
  name='Radosław Adamczyk'
  title='Templum sufficio creber dapifer in cursus vir'
  constructor() { }

  ngOnInit(): void {
  }

}
