import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

// Imports
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-list',
  imports: [
    CommonModule,

    MatListModule,
    MatIconModule
  ],
  standalone: true,
  templateUrl: './menu-list.html',
  styleUrl: './menu-list.scss',
})
export class MenuList {
  @Output() public menuToogle: EventEmitter<void> = new EventEmitter<void>()

  public onCloseMenu(): void {
    this.menuToogle.emit();
  }
}
