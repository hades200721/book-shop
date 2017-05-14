import {
  Component, OnInit,
  ViewChild, ElementRef,
  Output, EventEmitter, Renderer
} from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;

  constructor(private renderer: Renderer, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  clearIngredient() {
    this.renderer.setElementProperty(this.ingredientName.nativeElement, 'value', '');
    this.renderer.setElementProperty(this.ingredientAmount.nativeElement, 'value', '');

  }

  onSaveIngredient() {
    this.shoppingListService.addIngredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value);
  }

}
