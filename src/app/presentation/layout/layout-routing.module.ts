import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPublicComponent } from "./layout-public/layout-public.component";
import { HomeComponent } from "./home/home.component";
import { StorePageComponent } from "../store-page/store-page.component";
import { StoriesPageComponent } from "../stories-page/stories-page.component";
import { CartPageComponent } from "../cart-page/cart-page.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutPublicComponent,
        children:[
             {
              path: '',
              component: HomeComponent
            },
            {
                path: 'store',
                component: StorePageComponent
            },
            {
                path: 'stories',
                component: StoriesPageComponent
            },
            {
                path: 'cart',
                component: CartPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule { }