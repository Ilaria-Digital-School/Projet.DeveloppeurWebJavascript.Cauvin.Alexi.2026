import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Authentification } from './components/authentification/authentification';
import { Contact } from './components/contact/contact';
import { AllRecipes } from './components/all-recipes/all-recipes';
import { Account } from './components/account/account';
import { RecipeDetails } from './components/recipe-details/recipe-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, Authentification, Contact, AllRecipes, Account, RecipeDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DisHub');

  hideLayout = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        this.hideLayout = route.snapshot.data['hideLayout'] ?? false;
      });
  }

}
