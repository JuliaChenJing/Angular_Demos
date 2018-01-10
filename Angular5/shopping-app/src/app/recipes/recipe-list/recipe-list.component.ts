import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "simply a test","http://s4.sinaimg.cn/middle/610a6eb2t774f52cd64d3&690")
  ];

  constructor() { }

  ngOnInit() {
  }

}
