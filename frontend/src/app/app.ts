import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { IndicatorsModule } from './shared/indicators';
import { PopupsModule } from './shared/popups';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    IndicatorsModule,
    PopupsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  public showSpinner: boolean = false;

  private firestore = inject(Firestore);

  constructor() { }

  public onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  public ngOnInit(): void {
    const testCollection = collection(
      this.firestore,
      'test'
    );

    collectionData(testCollection).subscribe((personas) => {
      console.log(personas);
    });
  }
}
