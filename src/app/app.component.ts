import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: number = 1;
  
  onPageSelect(recipes) {
    this.recipes = recipes;
  }
}
