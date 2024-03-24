import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentTypeFilterPipePipe } from '../content-type-filter-pipe.pipe';
import { HoverAffectDirective } from '../hover-affect.directive'
import { FormsModule } from '@angular/forms';
import { contentDb } from '../helper-files/contentDb';
import { FoodService } from '../services/food.service';
import { ModifyContentComponentComponent } from '../modify-content-component/modify-content-component.component';


@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, RouterOutlet, ContentTypeFilterPipePipe, HoverAffectDirective, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contents: any[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    this.foodService.getContentArray()
      .subscribe(contents => this.contents = contents);
  }
  
  
 /*  contents = contentDb;

    constructor() { }

    ngOnInit(): void {
    } */
}


/* contentArray: Content[]  = [
    { id: 1, title: 'Chile en Nogada', description:'Created with poblano chili, ground beef and pork and spices', taste:'Spicy', ingridients:'Chile Poblano, Sour cream, Salt, Ground beef, Ground beef pork, oil, fruits' , Costo: 150, type:'Spicy sweet food', imageUrl:'https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/red-meats-&-red-meat-dishes/chile-en-nogada/main-header.jpg', tags:['Spicy','Sweet','Salt'] },
    { id: 2, title: 'Tacos al Pastor', description:'Cooked with tortilla and marinated pork', taste:'Salty', ingridients:'Tortilla, meet pork, species' , Costo: 50, type:'Salty', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.directoalpaladar.com.mx%2Fcomida-mexicana%2Fcomo-preparar-carne-para-tacos-al-pastor-secreto-donde-reside-sabor-este-delicioso-antojito-mexicano&psig=AOvVaw2wDDNPYmuCM5FDXMZXJs4-&ust=1709098391107000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDfvYLmyoQDFQAAAAAdAAAAABAE', tags:['Spicy','Sweet','Salt'] },
    { id: 3, title: 'Birria', description:'Cooked with lamb meat in chili sauce', taste:'Spicy', ingridients:'Meet Lamb, Chily,Water, Onion, species' , Costo: 250, type:'Spicy', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fbirria&psig=AOvVaw0HRJYHPyZt3JtJ2PE8AnCg&ust=1709098620941000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKColNbmyoQDFQAAAAAdAAAAABAE', tags:['Spicy','Sweet','Salt'] },
    { id: 4, title: 'Cochinita Pibil', description:'Created with pork, chili and spices', taste:'Spicy', ingridients:'Salt,Ground beef pork, oil, species' , Costo: 350, type:'Spicy', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotos%2Fcochinita-pibil&psig=AOvVaw2Wsj76zcGpRH3D1qZuI82S&ust=1709098794010000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCX16jnyoQDFQAAAAAdAAAAABAE', tags:['Spicy','Sweet','Salt'] },
    { id: 5, title: 'Pozole', description:'Created with meet pork and chili', taste:'Spicy', ingridients:'Corn, chili, water, salt, species' , Costo: 90, type:'Salty', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.admagazine.com%2Fcultura%2Fpozole-platillo-tradicional-mexicano-20200910-7406-articulos&psig=AOvVaw2aOhcxrB0nsd0MAgdGeQP1&ust=1709098916022000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjvg-PnyoQDFQAAAAAdAAAAABAE', tags:['Spicy','Sweet','Salt'] },
    { id: 6, title: 'Quesadillas', description:'Created with dough corn, ground beef and pork and spices', taste:'Salty', ingridients:'Dough corn, meet, cheess, cream' , Costo: 40, type:'Salty', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcookpad.com%2Feeuu%2Frecetas%2F12859178-quesadillas-fritas-de-vegetales-amimanera&psig=AOvVaw3ynnGldNDHlOl83tsv0dcm&ust=1709099050065000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJC5qKPoyoQDFQAAAAAdAAAAABAE', tags:['Spicy','Sweet','Salt'] },
    { id: 7, title: 'Sopes', description:'Created with poblano chili, ground beef and pork and spices', taste:'Spicy', ingridients:'Chile Poblano, Sour cream, Salt, Ground beef, Ground beef pork, oil, fruits' , Costo: 50, type:'Spicy sweet food', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotos%2Fsopes&psig=AOvVaw2cxhG7KMnajjn8Jn3fjMvb&ust=1709099208054000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiure7oyoQDFQAAAAAdAAAAABAE', tags:['Spicy','Sweet','Salt'] },
    { id: 8, title: 'Huaraches', description:'Cooked with tortilla and marinated pork', taste:'Salty', ingridients:'Tortilla, meet pork, species' , Costo: 70, type:'Salty', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recetasgratis.net%2Freceta-de-huaraches-de-pollo-75449.html&psig=AOvVaw3q9ac6R4dcLy-3U-McQZEq&ust=1709099163966000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiTktnoyoQDFQAAAAAdAAAAABAE', tags:['Spicy','Sweet','Salt'] },
]; */


filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;
searchContent: any;
searchTitle: any;

  checkTitle(){
    this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

  constructor(){

  }

  /* //Assignment#5
  onContentAdded(newContent: any): void {
    
    console.log("New content added:", newContent);
    
  } */
}