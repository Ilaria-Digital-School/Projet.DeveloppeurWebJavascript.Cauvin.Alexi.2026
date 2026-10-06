import { Component, inject} from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe-service';
import { RecipeCard } from '../recipe-card/recipe-card';

@Component({
  selector: 'app-recipe-details',
  imports: [CarouselModule, RecipeCard],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css',
})
export class RecipeDetails {

   recipeCarouselOptions: OwlOptions = {
    loop: false,
    margin: 20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  private activatedRoute = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);

  recipeID: any;

  recipe: any = {
    ingredients: [],
    tag: []
  };

  recipes: any[] = [];

  ngOnInit() {

    this.recipeID = this.activatedRoute.snapshot.paramMap.get('id');

    this.recipeService.getRecipeByID(this.recipeID).subscribe({
      next: (res: any) => {
        this.recipe = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        alert("Erreur lors de la récupération des recettes");
      }
    });

    this.recipeService.getAllRecipe().subscribe({
      next: (res: any) => {
        this.recipes = res.filter(
          (recipeItem: any) => recipeItem._id !== this.recipeID
        );
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        alert("Erreur lors de la récupération des recettes");
      }
    });

  }


}
