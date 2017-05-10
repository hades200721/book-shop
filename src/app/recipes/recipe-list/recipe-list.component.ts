import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('cake', 'whatever', 'http://images.media-allrecipes.com/userphotos/600x600/4504513.jpg'),
    new Recipe('A Test Recipe', 'whatever', 'http://images.media-allrecipes.com/userphotos/600x600/4358589.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

}
