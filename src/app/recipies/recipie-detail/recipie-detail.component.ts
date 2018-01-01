import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  recipe: Recipe;  
  id: number;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {    
  }

  ngOnInit() {
    //const id = this.route.snapshot.params['id']; zadziala tylko przy pierwszym wyswitleniem recipe details, ale w naszym przypadku mozemy wyswietlic ten komponent wiele razy dla roznych recipe
    // to rozwiazanie zatem nie jest dla nas OK
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  } 
}
