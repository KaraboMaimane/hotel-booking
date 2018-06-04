import { Component} from '@angular/core';
import bookingslist from '../arrays';

@Component({
  selector: 'app-suites',
  templateUrl: './suites.component.html',
  styleUrls: ['./suites.component.css']
})
export class SuitesComponent{
    //setting up my variables that will go to my array
    name;
    surname;
    idNo;
    dateFrom;
    dateTo;
    tenants;
    email;
    
    inputName(value){
      this.name = value;
      console.log(this.name);
    }

    inputSurname(value){
      this.surname = value;
      console.log(this.surname);
    }
    
    inputIdNo(value){
      this.idNo = value;
      console.log(this.idNo);
    }

    inputDateFrom(value){
      this.dateFrom = value;
      console.log(this.dateFrom.value);
    }

    inputDateTo(value){
      this.dateTo = value;
      console.log(this.dateTo.value);
    }

    inputTenants(value: number){
      this.tenants = value;
      console.log(this.tenants);
    }

    inputEmail(value){
      this.email = value;
      console.log(this.name);
    }

    bookingsPush(event){
      let booking = {
        name: this.name,
        surname: this.surname,
        idNo: this.idNo,
        bDateFrom: this.dateFrom,
        bDateTo: this.dateTo,
        tenantsNo: this.tenants,
        emailAddress: this.email
      }
  
      bookingslist.push(booking);
      console.log(bookingslist);
    }
}
