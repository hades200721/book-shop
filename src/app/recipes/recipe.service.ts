import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';


@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService) { }

    private recipes: Recipe[] = [
        // new Recipe('cake', 'whatever', 'http://images.media-allrecipes.com/userphotos/600x600/4504513.jpg',
        //     [new Ingredient('milk', 4), new Ingredient('bread', 14)]),
        // new Recipe('A Test Recipe', 'descreption goes here...', 'http://images.media-allrecipes.com/userphotos/600x600/4358589.jpg',
        //     [new Ingredient('banana', 4), new Ingredient('orange', 33)]),
        // new Recipe('pinapplepie', 'pen apple and pinapple', 'https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.135.1080.1080/12531079_1225886307426286_774845945_n.jpg', [])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }

    addIngrdientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addRecipesToShoppingList(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }


}