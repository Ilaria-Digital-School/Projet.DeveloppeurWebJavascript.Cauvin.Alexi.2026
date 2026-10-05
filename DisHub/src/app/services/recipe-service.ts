import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateRecipe } from '../components/create-recipe/create-recipe';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

   // Destination /adresse
  recipeUrl: string = 'http://localhost:4200'


  //Livreur
  private httpClient = inject(HttpClient);

  getAllRecipe(){

    return this.httpClient.get<any[]>(this.recipeUrl).pipe(
      map(recipes =>
        recipes.map(recipe => ({
          ...recipe,
          nameProd : recipe.name.toUpperCase(),
        }))
      )
    )
  }
  




  // Reponse : string , boolean / ProduitObj + id (auto généré)
  AddRecipe(recipeObj:any){
    const token = localStorage.getItem("token");

    const headers = new HttpHeaders({
      Authorization: `Bearer $(token)`
    });

    return this.httpClient.post(this.recipeUrl, recipeObj, {headers});
  }

  // Reponse : produitObj || null
  getRecipeByID(id:any){
    // return this.httpClient.get(`$(this.recipeUrl)/${id}`)
    //return this.httpClient.get(this.recipeUrl + '/' + id);
    return this.httpClient.get(this.recipeUrl + '/' + id, {withCredentials: true});
  }

  // Reponse : string, boolean
  deleteRecipeByID(id:any){
    return this.httpClient.delete(this.recipeUrl + '/' + id);
  }

  // Reponse : string, boolean || recipeObj + id
  updateRecipe(recipeObj:any){
    return this.httpClient.put(this.recipeUrl + '/' + recipeObj.id, recipeObj);
  }

}
