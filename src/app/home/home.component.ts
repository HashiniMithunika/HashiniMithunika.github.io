import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Blog1Component} from "./blog-1/blog-1.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('content') content!: TemplateRef<any>;
  constructor(public dialog: MatDialog) {}

  readMore(url: string) {
    window.open(url, "_blank");
    // const dialogRef = this.dialog.open(Blog1Component, {
    //   panelClass: 'dialog-centered',
    // });
    //
    // dialogRef.afterClosed().subscribe(() => {
    //   console.log('The dialog was closed');
    // });
  }
}
