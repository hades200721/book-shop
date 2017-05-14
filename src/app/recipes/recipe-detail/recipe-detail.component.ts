import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('data') recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  sendToShoppingList() {
    this.recipeService.addIngrdientsToShoppingList(this.recipe.ingredients);
  }

}
