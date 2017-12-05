import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipieSelected(recipe: Recipe) {    
    this.recipeWasSelected.emit(recipe);
  }
}
