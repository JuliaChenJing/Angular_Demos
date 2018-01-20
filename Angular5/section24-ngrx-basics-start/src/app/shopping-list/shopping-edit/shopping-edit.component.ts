import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from "@ngrx/store";
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  //editMode was initially set to be false
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  /*The Constructor is a default method of the class that is executed when the class is 
  instantiated and ensures proper initialization of fields in the class and its subclasses
  
  called first time before the ngOnInit()*/
  constructor(private slService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>) { }
  /*ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done
   creating the component.
  called after the constructor and called  after the first ngOnChanges() */
  ngOnInit() {

    this.subscription = this.slService.startedEditing
      .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        //after the ShoppingEditComponent is created, editMode is set to be true
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    //if editMode is true,Update, otherwise, Add
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({
        index: this.editedItemIndex,
        ingredient: newIngredient
      }))
      console.log("edit mode: updateIngredient(this.editedItemIndex, newIngredient)");
    }
    else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
      console.log("not edit mode :addIngredient(newIngredient)");
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.editedItemIndex));
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
