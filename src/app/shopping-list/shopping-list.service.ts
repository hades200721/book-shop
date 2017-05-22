import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('sugar', 1),
        new Ingredient('eggs', 2),
        new Ingredient('cacao', 3),
        new Ingredient('meat', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIndexIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(name: string, amount: number) {
        const newIngredient = new Ingredient(name, amount);
        this.ingredients.push(newIngredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addRecipesToShoppingList(ingredients: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}