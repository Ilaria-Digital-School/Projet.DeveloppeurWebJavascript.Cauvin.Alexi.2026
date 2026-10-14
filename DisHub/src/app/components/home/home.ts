import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RecipeCard } from '../recipe-card/recipe-card';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RecipeService } from '../../services/recipe-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RecipeCard, CarouselModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

    carouselOptions: OwlOptions = {
      loop: false,
      margin: 20,
      dots: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    };

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
