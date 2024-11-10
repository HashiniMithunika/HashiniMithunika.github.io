// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, NgClass]  // Import RouterModule to enable routing
})
export class AppComponent {
  isMenuOpen = false; // Control whether the mobile menu is open

  // Toggle the menu visibility on mobile
    title: 'HashiniMithunika.github.io' | undefined;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Close the menu when a link is clicked
  closeMenu() {
    this.isMenuOpen = false;
  }
}
