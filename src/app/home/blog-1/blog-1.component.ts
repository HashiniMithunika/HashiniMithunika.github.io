import { Component } from '@angular/core';
import {from} from "rxjs";

@Component({
  selector: 'app-blog-1',
  standalone: true,
  imports: [],
  templateUrl: './blog-1.component.html',
  styleUrl: './blog-1.component.scss'
})
export class Blog1Component {

  protected readonly Component = Component;
  protected readonly from = from;
}
