import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple test',
    'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
    new Recipe('Another test recipe', 'This is simple test',
    'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  ];

  constructor() { }
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  ngOnInit() {
  }

  onRecipieSelected(recipe: Recipe) {    
    this.recipeWasSelected.emit(recipe);
  }
}
