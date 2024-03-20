import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from './helper-files/content-interface';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypeFilterPipePipe } from "./content-type-filter-pipe.pipe";
//import { ClickMeComponent } from "./content-list/click-me-component";
//import { SearchComponent } from "./search/search.component";
import { ContentCardComponent } from "./content-card/content-card.component";
import { filter } from 'rxjs';
import { FoodService } from './services/food.service';
//import { CreateContentComponent } from './create-content/create-content.component'; // Assignment#5
import { MessagesService } from './services/messages.service';

@Component({
    selector: 'app-root',
    standalone: true,
    //Assignment#5
    imports: [CommonModule, ContentListComponent, RouterOutlet, ContentTypeFilterPipePipe, ContentCardComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    
})
export class AppComponent {
  inputId: number;
  contentItem: any;

  constructor(private foodService: FoodService, private messagesService: MessagesService) {}

  getContentItem(): void {
    // Check if inputId is a valid number
    if (isNaN(this.inputId)) {
      this.messagesService.addMessage('Error: Please enter a valid number.');
      return;
    }

    // Retrieve content item by id
    this.foodService.getContentById(this.inputId)
      .subscribe(
        item => {
          this.contentItem = item;
          this.messagesService.addMessage(`Content Item at id: ${this.inputId}`);
        },
        error => {
          if (error === 'Not Found') {
            this.messagesService.addMessage('Error: Content item not found.');
          } else {
            this.messagesService.addMessage('An error occurred while fetching the content item.');
          }
        }
      );
  }
}
/* export class AppComponent {

  title = 'L_Castaneda_MyFavouriteFood_ChileenNogada';
  id =1;
  description = 'Created with poblano chili, ground beef and pork and spices';
  taste = 'Spicy';
  type = 'Spicy';
  imgURL ='https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/red-meats-&-red-meat-dishes/chile-en-nogada/main-header.jpg';
onClickMe: any;

} */

/* export class AppComponent implements OnInit {
  contentItem: any;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.getContentItem(1); 
  }

  getContentItem(id: number): void {
    this.foodService.getContentById(id)
      .subscribe(item => this.contentItem = item);
  }
} */

