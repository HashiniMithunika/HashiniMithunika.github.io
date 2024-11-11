import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from '@angular/material/icon'
import {NgOptimizedImage} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage,
    MatTooltip
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  navigate(path: string) {
    window.open(path, '_blank');
  }
}
