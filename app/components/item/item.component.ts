import { Component, OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import { FormBuilder, Validators } from '@angular/common';
import { Router } from '@angular/router';
import {TimerWrapper} from '@angular/common/src/facade/async';


import { ItemService} from './../../services/itemsProvider/itemsProvider.service';

@Component({
	templateUrl: 'app/components/item/item.component.tmpl.html',
	styleUrls: ['app/components/item/item.component.css'],
	providers: [ ItemService, HTTP_PROVIDERS ]

})

export class ItemComponent implements OnInit{
    editingItem: boolean = false;
    itemId: string;
	item;
    editForm: any;

     constructor(private itemService: ItemService, private router: Router, private fb: FormBuilder){
		 this.editForm = this.fb.group({
			 'title': ['', Validators.required],
			 'author': ['', Validators.required],
			 'content': ['', Validators.required]
		 });
    }

    onEdit(){
        this.editingItem = true;
    }

    onSave(id){

		if(this.editForm.value.title == ""){
			this.editForm.value.title = this.item.title
		}
		if (this.editForm.value.author == "") {
			this.editForm.value.author = this.item.author
		}
		if (this.editForm.value.content == "") {
			this.editForm.value.content = this.item.content
		}

        this.itemService.editItem(id, this.editForm.value);
        TimerWrapper.setTimeout(() => {
		   this.editingItem = false;
		    this.getItem(id);
			this.router.navigate(['/item/' + id]);
		}, 500);
    }

    onDelete(id){
		this.itemService.deleteItem(id);
        //TimerWrapper.setTimeout(() => {
		//	this.router.navigate(['/items']);
		//}, 500);
    } 

    getItem(id){
	    this.itemService.getItem(id)
			.subscribe(
			    data => this.item = data,
			    err => console.log('some error'),
			    () => console.log('succsess get')
            );  
    }

    ngOnInit(){
		var temp = window.location.href.split('/');
		this.itemId = temp[temp.length - 1];
	    this.getItem(this.itemId);
    }

    onCancel(id){
		this.router.navigate(['/item/' + id]);
		this.editingItem = false;
    }
    onBack(){
		this.router.navigate(['/items']);
    }
 }