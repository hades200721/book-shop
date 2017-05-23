import {
  Component,
  OnInit,
  Output,
  Renderer,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') signupForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedIngrdient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedIngrdient = this.shoppingListService.getIndexIngredient(index);
        this.signupForm.setValue({
          'name': this.editedIngrdient.name,
          'amount': this.editedIngrdient.amount
        })
      }
      )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      const newIngrdient = new Ingredient(value.name, value.amount)
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngrdient);
    } else {
      this.shoppingListService.addIngredient(value.name, value.amount);
    }
    this.resetForm();
  }

  onDeleteItem() {
    this.shoppingListService.removeIngredient(this.editedItemIndex);
    this.resetForm();
  }

  resetForm() {
    this.signupForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
