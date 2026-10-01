import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Authentification } from './components/authentification/authentification';
import { AllRecipes } from './components/all-recipes/all-recipes';
import { Account } from './components/account/account';
import { RecipeDetails } from './components/recipe-details/recipe-details';
import { CreateRecipe } from './components/create-recipe/create-recipe';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'Authentificiation', component: Authentification, data: {hideLayout: true}},
    {path: 'Allrecipes', component: AllRecipes},
    {path: 'Account', component: Account},
    {path: 'RecipeDetails', component: RecipeDetails},
    {path: 'createRecipe', component: CreateRecipe},
    {path: 'contact', component: Contact},
];
