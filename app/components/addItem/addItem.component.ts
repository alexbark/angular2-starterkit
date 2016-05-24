import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { Router } from '@angular/router';
import { Control, ControlGroup, FormBuilder, Validators } from '@angular/common';
import { ItemService} from './../../services/itemsProvider/itemsProvider.service';
import {TimerWrapper} from '@angular/common/src/facade/async';
import { CustomValidator} from './../../services/validators/custom.validator';

@Component({
	templateUrl: 'app/components/addItem/addItem.component.tmpl.html',
	styleUrls: ['app/components/addItem/addItem.component.css'],
	providers: [ItemService, HTTP_PROVIDERS, TimerWrapper]
})

export class AddItemComponent{
	userForm:ControlGroup;
	formIsValid: boolean = true;

	constructor(private fb: FormBuilder, private itemService: ItemService, private router: Router){
		this.userForm = this.fb.group({
			'title': ['', Validators.compose([Validators.required , CustomValidator.checkUnderscore])],
			'author': ['', Validators.required],
			'content': ['', Validators.required]
		});

	}
	onFormSubmit(event){
		if(this.userForm.status == "INVALID"){
			this.formIsValid = false;
			
		}
        if (this.userForm.status == "VALID") {
        	this.itemService.addItem(this.userForm.value);
        }
		//TimerWrapper.setTimeout(() => {
		//	this.router.navigate(['/items']);
		//}, 500);
	}

	onCancel(){
		this.router.navigate(['/items']);
	}
}