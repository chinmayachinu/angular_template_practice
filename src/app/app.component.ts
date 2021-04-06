import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is interpolation';
  myBirthDay=new Date(1999,4,11);//since month parameter is zero based
  myName:string='chinmaya'
  toggleButton:boolean=true
  isClassBinding:boolean=true
  value:string=""
  callPhone(phone:any){
    alert(phone)
  }
}
