import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { ITEMS } from './mock-items';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ItemService {
    
    itemsAPIUrl: string = 'http://localhost:5678/api/items';

    constructor(private http: Http, private router: Router){

    }
	getItems(){
		//return ITEMS;
		return this.http.get(this.itemsAPIUrl)
			.map(res => res.json());
	}
	
	getItem(id) {
		return this.http.get(this.itemsAPIUrl + '/'+ id)
			.map(res => res.json());
	}

	addItem(obj){
		var body = JSON.stringify(obj);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http
            .post(this.itemsAPIUrl, body, { headers: headers })
            .map(res => res.json())
            .subscribe();
	}

	deleteItem(id){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.delete(this.itemsAPIUrl + '/' + id, { headers: headers })
			.map(res => res.json())
            .subscribe();

	}

	editItem(id. obj){
		var body = JSON.stringify(obj);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
				
		this.http
            .post(this.itemsAPIUrl + '/' + id, body, { headers: headers })
            .map(res => res.json())
            .subscribe();

	}
}
 
