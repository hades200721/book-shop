import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
