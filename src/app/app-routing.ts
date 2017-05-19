import { NgModule } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const appRoutes: Route[] = [
    { path: '', component: EmptyPageComponent, pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: ':id', component: RecipeDetailComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
