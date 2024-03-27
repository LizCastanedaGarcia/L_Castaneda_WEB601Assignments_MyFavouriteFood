import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { FoodService } from '../services/food.service';
import { MessagesService } from '../services/messages.service';


@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports : [FormsModule ,ModifyContentComponentComponent],
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
  constructor(private contentService:FoodService,private message:MessagesService)
  {}


  ngOnInit(){
    this.contentService.getContentArray().subscribe(content=>this.newContentArray=content);

  }

  addContent():void {
    console.log('Adding new Content:', this.newContent);
    if(typeof this.newContent.tags=='string'){
      this.newContent.tags=(this.newContent.tags as string).split(',');

    } else {
      this.newContent.tags=[];
    }
    this.contentService.addContent(this.newContent).subscribe(newContentFromServer=>{
      this.newContentArray.push(newContentFromServer);
      this.contentAdded.emit(newContentFromServer);
      console.log('Content Array after adding:',this.newContentArray);

      // this.message.add(`Content"${this.newContent.title}" added successfully!`);

      this.newContent={id:1,title:'',description:'',taste: '',ingridients: '',Costo: 0,
      type:'',imageUrl:'',tags: []}
    });
  }

}
