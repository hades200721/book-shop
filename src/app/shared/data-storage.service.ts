import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs';

@Injectable()
export class DataStorageService {


    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService
    ) { }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://sandbox-de210.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();

        return this.http.get('https://sandbox-de210.firebaseio.com/recipes.json?auth=' + token)
            .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            })
            .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            },
            (error: Response) => {
                console.info(error);
            }
            )
    }
}