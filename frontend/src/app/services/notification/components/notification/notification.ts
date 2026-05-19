import { Component, OnInit, Inject } from '@angular/core';

// Imports
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';


export interface Notification {
  message: string;
}

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.html',
  styleUrl: './notification.scss',
})
export class Notification implements OnInit{

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: Notification
  ) {}

  public ngOnInit(): void {

  }
}
