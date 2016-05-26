import { Control } from '@angular/common';

export class CustomValidator{
  
	//undercsoreNotFound: boolean = false;

  static checkUnderscore(control: Control){
      if(control.value.indexOf('_')>=0){
		  return null;
      }
      return { underscoreNotFound: true };
   }
}