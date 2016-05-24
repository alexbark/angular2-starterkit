import {Pipe} from '@angular/core';


@Pipe({ name: 'order' })

export class OrderPipe {
   
	transform(value, argument) {
        
        if(argument == 'asc'){
			value.sort(function(a, b) { 
				return (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 
				         : (b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0 })
         return value.filter((item) => item.title);



			
        }

        if(argument == 'desc'){
			value.sort(function(a, b) { 
				return (a.title.toLowerCase() > b.title.toLowerCase()) ? -1 
				         : (b.title.toLowerCase() > a.title.toLowerCase()) ? 1 : 0 })
			return value.filter((item) => item.title);
        }

	}
}