import {Pipe} from '@angular/core';


@Pipe({ name: 'search' })

export class SearchPipe {

	transform(value, argument) {
		// title is property of filtered object
		if (argument === undefined) {
			return value.filter((item) => item.title.match(/^.*/));
		}
		else {
			return value.filter((item) =>  
				        //item.title.toLowerCase().match(argument.toLowerCase()) 
				        {   
				           if(item.title.toLowerCase().indexOf(argument.toLowerCase()) > -1) {
					             return item.title
				            }
				        }
				     );
		}  

	}
}