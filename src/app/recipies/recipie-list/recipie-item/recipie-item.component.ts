import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipieSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {  
    this.recipieSelected.emit();
  }
}
