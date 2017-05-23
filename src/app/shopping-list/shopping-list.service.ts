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

    updateIngredient(index: number, newIngrdient: Ingredient) {
        this.ingredients[index] = newIngrdient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    removeIngredient(index: number) {
        // we actually removing the item here
        this.ingredients.splice(index, 1);
        // returning a copy of our new ingredients array
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addRecipesToShoppingList(ingredients: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}