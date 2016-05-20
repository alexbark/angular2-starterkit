import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/common';
import { ItemService} from './../../services/itemsProvider/itemsProvider.service';
import {TimerWrapper} from '@angular/common/src/facade/async';

@Component({
	templateUrl: 'app/components/addItem/addItem.component.tmpl.html',
	styleUrls: ['app/components/addItem/addItem.component.css'],
	providers: [ItemService, HTTP_PROVIDERS, TimerWrapper]
})

export class AddItemComponent{
	userForm:any;

	constructor(private fb: FormBuilder, private itemService: ItemService, private router: Router){
		this.userForm = this.fb.group({
			'title': ['', Validators.required],
			'author': ['', Validators.required],
			'content': ['', Validators.required]
		});

	}
	onFormSubmit(event){
		this.itemService.addItem(this.userForm.value);
		TimerWrapper.setTimeout(() => {
			this.router.navigate(['/items']);
		}, 300);
	}
}