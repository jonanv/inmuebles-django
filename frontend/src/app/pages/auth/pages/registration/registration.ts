import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class Registration {

  constructor() {}

  public onRegistration(form: NgForm): void {

  }
}
