import { Component } from '@angular/core';
import {NavBarComponent} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-prog-languages',
  standalone: true,
    imports: [
        NavBarComponent
    ],
  templateUrl: './prog-languages.component.html',
  styleUrl: './prog-languages.component.css'
})
export class ProgLanguagesComponent {

}
