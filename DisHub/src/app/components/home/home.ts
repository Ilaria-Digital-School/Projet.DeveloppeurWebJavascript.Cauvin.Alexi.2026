import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RecipeCard } from '../recipe-card/recipe-card';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [RecipeCard, CarouselModule],
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

}
