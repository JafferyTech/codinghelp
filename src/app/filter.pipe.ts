import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchtext: string): any[] {
   if(!items){
     return [];
   }
   if(!searchtext){
     return items;
   }
   searchtext=searchtext.toLocaleLowerCase();
   return items.filter(it=>{
     return it.toLocaleLowerCase().includes(searchtext);
   });
    
  }

}
