import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';



@Pipe({
  name: 'contentTypeFilterPipe',
  standalone: true
})

export class ContentTypeFilterPipePipe implements PipeTransform {

  transform(value: Content[], type: string): Content[] {
    
  if(!value) { 
    return [];
  }
  if (!type) {
    return value.filter(item => !item.type);
  } else {
    return value.filter(item => item.type === type);
  }

    return value.filter(item => item.type === type);
}
}

