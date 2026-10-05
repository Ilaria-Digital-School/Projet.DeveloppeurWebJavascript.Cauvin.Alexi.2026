import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RecipeService } from '../../services/recipe-service';

@Component({
  selector: 'app-create-recipe',
  imports: [CarouselModule, FormsModule],
  templateUrl: './create-recipe.html',
  styleUrl: './create-recipe.css',
})
export class CreateRecipe {

  tagCarouselOptions: OwlOptions = {
      loop: false,
      margin: 15,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,

      responsive: {
        0: {
          items: 2
        },
        500: {
          items: 3
        },
        768: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
  };

  private activatedRoute = inject(ActivatedRoute);

  private recipeService = inject(RecipeService);

  recipes:any[]=[];

  recipesID!:any;

  recipe = {
    _id: 0,
    name: '',
    time: '',
    people: '',
    kcal: '',
    difficulty: [],
    img:'',
    ingredients: [] as string[],
    instructions:'',
    tag: [] as string[],
  }

  isEditMode = false;

  newIngredient = '';

  addIngredient() {
  if (this.newIngredient.trim() !== '') {
      this.recipe.ingredients.push(this.newIngredient);
      this.newIngredient = '';
    }
  }

  removeIngredient(index: number) {
    this.recipe.ingredients.splice(index, 1);
  }

  toggleTag(tag: string) {
    const index = this.recipe.tag.indexOf(tag);

    if (index === -1) {
      this.recipe.tag.push(tag);
    } else {
      this.recipe.tag.splice(index, 1);
    }
  }

  ngOnInit(){
    this.recipesID = (this.activatedRoute.snapshot.paramMap.get('id'));
    // this.products = JSON.parse(localStorage.getItem('recipes') || '[]');
    this.recipeService.getRecipeByID(this.recipesID).subscribe({
      next : (res:any) => {
        this.recipe = res;
      },
      error : (err) => {
        console.log(err);
      }
    });
    console.log(this.recipes);
    

    if(this.recipesID){
      this.isEditMode = true;
      this.recipe = this.recipes.find((p:any) => p.id === this.recipesID);
    }
  }

  addOrEditRecipe(recipeForm: NgForm){

     if(this.isEditMode){

      this.recipeService.updateRecipe(this.recipe).subscribe({
        next : (res:any) => {
          console.log(res);
          // this.recipe = res;
          alert("Recette modifié avec succés")
        },
        error : (err) => {
          console.log(err);
          alert("Erreur lors de la modification")
        }
      });

      // Enregistrer les modifications
      localStorage.setItem('recipes', JSON.stringify(this.recipes));

     } else {

      console.log("Recette envoyée :", this.recipe);
      
      this.recipeService.AddRecipe(recipeForm.value).subscribe({
        next : (res:any) => {
          this.recipe = res;
          alert("Produit ajouté!");
          recipeForm.reset();
        },
        error : (err) => {
          console.log(err);
          alert("Erreur lors de l'ajout de la recette!");
        }
      });

    }
  }

}
