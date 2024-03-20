import { Component, Input, ElementRef, Output, EventEmitter, HostListener, NgModule, input } from '@angular/core';
import { NgClass, CommonModule, NgComponentOutlet } from '@angular/common';
import {ContentTypeFilterPipePipe} from '../content-type-filter-pipe.pipe'
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { NgModel, NgModelGroup } from '@angular/forms';
import { HostBinding } from '@angular/core';
import {HoverAffectDirective} from '../hover-affect.directive'

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentTypeFilterPipePipe, HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  @Input()
  content!: Content;

showDetails() {
  console.log(`id: $(this.content.id}, Title: ${this.content.title})`);
  console.log('Image clicked!');
  console.log(`Image ID: ${this.content.id}, Image Title: ${this.content.title}`);

}


   }