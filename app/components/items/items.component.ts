import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import { ItemService} from './../../services/itemsProvider/itemsProvider.service';
import { SearchPipe} from './../../services/pipes/search.pipe';

@Component({
	templateUrl: 'app/components/items/items.component.tmpl.html',
	styleUrls: ['app/components/items/items.component.css'],
	pipes: [ SearchPipe ],
	providers: [ ItemService, HTTP_PROVIDERS]

})

export class ItemsComponent implements OnInit{ 
   
	items: Array<any>;
    userSearchInput: string;

    onAddNewItemClick(){
		this.router.navigate(['/add']);
    }

    constructor(private router: Router, private itemService: ItemService){

    }
    
	getItems() {
		//this.items = this.itemService.getItems();
		this.itemService.getItems()
			.subscribe(
			   data => this.items = data,
			   err => console.log('some error'),
			   () => console.log('success get')
            );	
	}
    

    ngOnInit(){
        this.getItems();
 
    }

    onItemClick(id){
		this.router.navigate(['/item/' + id]);
    }

}