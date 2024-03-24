import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { FoodService } from '../services/food.service';
import { MessagesService } from '../services/messages.service';


@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports : [FormsModule,MessagesService,ModifyContentComponentComponent],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    taste: '',
    ingridients: '',
    Costo: 0,
    type:'',
    imageUrl:'',
    tags: []
  };
  @Output() contentAdded=new EventEmitter<Content>();
  newContentArray: Content[]=[];
  constructor(private contentService:ContentService,private message:MessagesService);

  ngOnInit(){
    this.contentService.getContent().subscribe(content=>this.newContentArray=content);

  }
  addContentToList(newContentItem:Content):void {
    console.log('Adding new Content:',newContentItem);
    if(typeof newContentItem.tags=='string'){
      newContentItem.tags=(newContentItem.tags as string).split(',');

    } else {
      newContentItem.tags=[];
    }
    this.contentService.addContent(newContentItem).subscribe(newContentFromServer=>{
      this.newContentArray.push(newContentFromServer);
      this.contentAdded.emit(newContentFromServer);
      console.log('Content Array after adding:',this.newContentArray);

      this.message.add(`Content"${newContentItem.title}" added successfully!`);
      this.newContent={id:1,title:'',description:'',taste: '',ingridients: '',Costo: 0,
      type:'',imageUrl:'',tags: []}
    });
  }

}
