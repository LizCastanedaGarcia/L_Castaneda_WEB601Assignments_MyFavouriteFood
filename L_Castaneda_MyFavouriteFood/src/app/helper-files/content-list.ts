import { Content } from './content-interface';

export class ContentList {
private a:Content[]

constructor() {
    this.a=[];
}

get getContentArray() {
    return this.a
  }

addItem(i:Content) {
    this.a.push(i);
}

getContentHTML(i:number): string{
    let item:Content = this.a[i];
    return '<p>' + item.description + '<p>' + item.id + '<img url="' + item.imgURL + '"></img>';
}
}