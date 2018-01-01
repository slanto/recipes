import { EventEmitter } from '@angular/core';

import {Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple test',
    'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
    new Recipe('Another test recipe', 'This is simple test',
    'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  ];

  constructor() { }

   getRecipes() {
     return this.recipes.slice();
   }

   getRecipe(index: number) {
     return this.recipes[index];
   }

}
