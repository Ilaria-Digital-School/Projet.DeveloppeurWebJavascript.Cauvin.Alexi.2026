import { Component, inject } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { RecipeService } from '../../services/recipe-service';

@Component({
  selector: 'app-all-recipes',
  imports: [RecipeCard],
  templateUrl: './all-recipes.html',
  styleUrl: './all-recipes.css',
})
export class AllRecipes {

  private recipeService = inject(RecipeService);

  recipes: any[] = [];

  ngOnInit() {

    this.recipeService.getAllRecipe().subscribe({
      next: (res: any) => {
        this.recipes = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        alert("Erreur lors de la récupération des recettes");
      }
    });

  }


}
