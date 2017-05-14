import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe('cake', 'whatever', 'http://images.media-allrecipes.com/userphotos/600x600/4504513.jpg',
            [new Ingredient('milk', 4), new Ingredient('bread', 14)]),
        new Recipe('A Test Recipe', 'descreption goes here...', 'http://images.media-allrecipes.com/userphotos/600x600/4358589.jpg',
            [new Ingredient('banana', 4), new Ingredient('orange', 33)]),
        new Recipe('pinapplepie', 'pen apple and pinapple', 'https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.135.1080.1080/12531079_1225886307426286_774845945_n.jpg', [])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngrdientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addRecipesToShoppingList(ingredients);
    }


}