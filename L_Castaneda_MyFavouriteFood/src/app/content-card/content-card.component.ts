import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList;

constructor(){
this.contentList=new ContentList
this.contentList.addItem({
  id:1,
  style:'Mexican',
  description:'Tinga',
  ingredients:'Tomatoe, onion, chicken,species',
  imgURL:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recetasnestle.com.mx%2Frecetas%2Fcomidas-tinga-pollo&psig=AOvVaw1x_saKG2QPvMzmaRWo30aj&ust=1706285492130000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiM3_v2-IMDFQAAAAAdAAAAABAD',
  taste:'spicy',
  //tags?:string[]
});
this.contentList.addItem({
  id:2,
  style:'Italian',
  description:'Fetuccini',
  ingredients:'Cream,garlic, onion, parmesan,species',
  imgURL:'https://www.google.com/url?sa=i&url=http%3A%2F%2Fyommi.com%2Freceta%2Ffetuccini-rojo-con-queso&psig=AOvVaw0il6rTIPrnx6i4qyMYwmSd&ust=1706285721839000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCG0un3-IMDFQAAAAAdAAAAABAE',
  taste:'salty',
});
}
ngOnInit(){
  

}




}

