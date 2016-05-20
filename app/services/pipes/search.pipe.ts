import {Pipe} from '@angular/core';


@Pipe({ name: 'search' })

export class SearchPipe {

	transform(value, argument) {
		// name is property of filtered object
		if (argument === undefined) {
			return value.filter((item) => item.title.match(/^./));
		}
		else {
			return value.filter((item) => item.title.toLowerCase().match(argument.toLowerCase()));
		}  

	}
}