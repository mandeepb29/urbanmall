import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'blogdetail',
    component:BlogDetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'shop',
    component:ShopComponent
  },
  {
    path:'productdetail',
    component:ProductDetailsComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
