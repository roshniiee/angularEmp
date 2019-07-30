import { Component } from '@angular/core';
import { Employee } from 'src/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

emp : any[];
constructor(){
  let e1: Employee = new Employee(1,'Abc');
  let e2: Employee = new Employee(2,'Raja');
  this.emp=[e1,e2];
}

//  Users=[];

//  addUser(newUser: string) {
//    if (newUser) {
//      this.Users.push(newUser);
//    }
//  }
  
// // addId(newUserId:number){
// //   if(newUserId){
// //     this.Users.push(newUserId);
// //    }
// //  }

  title = 'Roshni';
}
