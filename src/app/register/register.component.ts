import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { FormControl, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('es');
  }

  user = {
    name: '',
    lastName: '',
    institucion: '',
  }

  institucionControl = new FormControl('');

  ngOnInit(): void {

  }

  onKeyUp(event: any) {

    let newValue = event.target.value;

    let regExp = new RegExp(`^[A-Za-z0-9? ]+$`);

    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }

}
