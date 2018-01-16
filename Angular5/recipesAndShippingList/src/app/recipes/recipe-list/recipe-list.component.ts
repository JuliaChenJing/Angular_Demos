import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("tomato dish", "sweet", "https://lh3.ggpht.com/mM9OZNTDb9fOObiNoc-lM9D4olwN59RRTvAKTxJ9Nu410gJqeEUJFEk9B9p2CTwFdA=h900"),
    new Recipe("potato dish", "spicy", "https://lh3.googleusercontent.com/pUcUtJ513GkOE-w20ERCXXY7n6ABM_8JnYVsLKajlvu0K8CWLyFGdU28-gDgNcEg9sg=h900"),
    new Recipe("cake", "tasty", "https://gw.alicdn.com/bao/uploaded/i4/T1_y_uXklrXXayLDI8_101733.jpg_460x460xz.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {

    this.recipeWasSelected.emit(recipe);
  }


}
