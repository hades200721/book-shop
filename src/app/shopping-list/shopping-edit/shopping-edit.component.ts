import {
  Component, OnInit,
  ViewChild, ElementRef,
  Output, EventEmitter, Renderer
} from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;
  @Output() saveIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  clearIngredient() {
    this.renderer.setElementProperty(this.ingredientName.nativeElement, 'value', '');
    this.renderer.setElementProperty(this.ingredientAmount.nativeElement, 'value', '');

  }

  onSaveIngredient() {
    const newIngredient = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value);
    this.saveIngredient.emit(newIngredient);
  }

}
