import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[]=[
    {
      id: 'r1',
      title: 'eee',
      imageUrl: 'https://img-3.journaldesfemmes.fr/MSfFA3VN6Vqcm4md-TNdZKXSwqU=/750x/smart/da90350b9db54a6487773c3d8dfc1633/recipe-jdf/397798.jpg',
      ingredients: [' french fries ', ' meat ', 'salad']
    },
    {
      id: 'r2',
      title: 'eee',
      imageUrl: 'https://www.seasonsandsuppers.ca/wp-content/uploads/2019/10/pork-schnitzel-3-500x500.jpg',
      ingredients: [' french fries ', ' meat ', 'salad']
    },
    {
      id: 'r3',
      title: 'eee',
      imageUrl: 'https://www.seasonsandsuppers.ca/wp-content/uploads/2019/10/pork-schnitzel-3-500x500.jpg',
      ingredients: [' french fries ', ' meat ', 'salad']
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipes(recipeId: string){
    return{...this.recipes.find(
      recipe =>{
        return recipe.id === recipeId ;
      })
    };
  }
  
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(
      recipe =>{
        return recipe.id !== recipeId;
      }
    );
  }
}
