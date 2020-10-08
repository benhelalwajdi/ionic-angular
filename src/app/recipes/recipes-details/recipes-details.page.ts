import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import {AlertController} from '@ionic/angular';
import { Button } from 'protractor';


@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  loadRecipe: Recipe ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('recipeId')){
          this.router.navigate(['/recipes']);
          return;
        }
        const recipeId = paramMap.get('recipeId');
        this.loadRecipe = this.recipesService.getRecipes(recipeId);
      }
    );
  };

  onDeleteRecipe(){
    this.alertController.create({
      header : "Are you sure?",
      message : "Do you really want delete this recipe ?",
      buttons : [{
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Delete',
        handler: ()=>{
          this.recipesService.deleteRecipe(this.loadRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(
      alertEl =>{
        alertEl.present();
      }
    );
  }
}
