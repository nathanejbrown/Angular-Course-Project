import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://placekitten.com/200/300'),
        new Recipe('Another Test Recipe', 'This is a test', 'https://placekitten.com/200/300')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}