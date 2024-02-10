import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  contentList: ContentList;
  
  isFirstCard: boolean = false;

  constructor(){
    this.contentList=new ContentList;
  
    this.contentList.addItem({
    id:1,
    style:'Mexica',
    description:'Coocked with tomatoe, onion, salt',
    ingredients:'Chicken, tomatoe, salt, onion',
    imgURL:'',
    taste:'Salad',
    });
    this.contentList.addItem({
    
      id:2,
      style:'Mexica',
      description:'Coocked with tomatoe, onion, salt',
      ingredients:'Chicken, tomatoe, salt, onion',
      imgURL:'',
      taste:'Salad',
      
    });

 
    
  }

  ngOnInit(){
  

  }
}