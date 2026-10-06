import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
})
export class RecipeCard {

  private Router = inject(Router);

  @Input() recipeInput:any;

}
