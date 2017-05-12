import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() setRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('cake', 'whatever', 'http://images.media-allrecipes.com/userphotos/600x600/4504513.jpg'),
    new Recipe('A Test Recipe', 'descreption goes here...', 'http://images.media-allrecipes.com/userphotos/600x600/4358589.jpg'),
    new Recipe('pinapplepie', 'pen apple and pinapple', 'https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.135.1080.1080/12531079_1225886307426286_774845945_n.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.setRecipe.emit(recipe);
  }
}
