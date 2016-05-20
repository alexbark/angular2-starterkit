import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { AboutComponent} from './../about/about.component';
import { HomeComponent} from './../home/home.component';
import { ItemsComponent} from './../items/items.component';
import { ItemComponent} from './../item/item.component';
import { AddItemComponent} from './../addItem/addItem.component';


@Component({
	selector: 'main-component',
	templateUrl: 'app/components/main/main.component.tmpl.html',
	styleUrls: ['app/components/main/main.component.css'],
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ ROUTER_PROVIDERS ]

})

@Routes([
	{ path: '/home', component: HomeComponent },
	{ path: '/about', component: AboutComponent },
	{ path: '/items', component: ItemsComponent },
	{ path: '/item/:id', component: ItemComponent },
	{ path: '/add', component: AddItemComponent }


])

export class MainComponent implements OnInit {


	constructor(private router: Router) { }

	ngOnInit() {
		this.router.navigate(['/home']);

	}

}   

