import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./pages/myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'souprecipes',
    loadChildren: () => import('./pages/souprecipes/souprecipes.module').then( m => m.SouprecipesPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'shoppinglist',
    loadChildren: () => import('./pages/shoppinglist/shoppinglist.module').then( m => m.ShoppinglistPageModule)
  },
  {
    path: 'abouttheapp',
    loadChildren: () => import('./pages/abouttheapp/abouttheapp.module').then( m => m.AbouttheappPageModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./pages/developers/developers.module').then( m => m.DevelopersPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'bestsellers',
    loadChildren: () => import('./bestsellers/bestsellers.module').then( m => m.BestsellersPageModule)
  },
  {
    path: 'alltimefav',
    loadChildren: () => import('./alltimefav/alltimefav.module').then( m => m.AlltimefavPageModule)
  },
  {
    path: 'blackbean',
    loadChildren: () => import('./allrecipepage/blackbean/blackbean.module').then( m => m.BlackbeanPageModule)
  },
  {
    path: 'cauliflower',
    loadChildren: () => import('./allrecipepage/cauliflower/cauliflower.module').then( m => m.CauliflowerPageModule)
  },
  {
    path: 'cheeseburger',
    loadChildren: () => import('./allrecipepage/cheeseburger/cheeseburger.module').then( m => m.CheeseburgerPageModule)
  },
  {
    path: 'cheesyham',
    loadChildren: () => import('./allrecipepage/cheesyham/cheesyham.module').then( m => m.CheesyhamPageModule)
  },
  {
    path: 'creamywhite',
    loadChildren: () => import('./allrecipepage/creamywhite/creamywhite.module').then( m => m.CreamywhitePageModule)
  },
  {
    path: 'roastedred',
    loadChildren: () => import('./allrecipepage/roastedred/roastedred.module').then( m => m.RoastedredPageModule)
  },
  {
    path: 'roastedtomato',
    loadChildren: () => import('./allrecipepage/roastedtomato/roastedtomato.module').then( m => m.RoastedtomatoPageModule)
  },
  {
    path: 'stuffedpepper',
    loadChildren: () => import('./allrecipepage/stuffedpepper/stuffedpepper.module').then( m => m.StuffedpepperPageModule)
  },
  {
    path: 'superfast',
    loadChildren: () => import('./allrecipepage/superfast/superfast.module').then( m => m.SuperfastPageModule)
  },
  {
    path: 'tomatohamburger',
    loadChildren: () => import('./allrecipepage/tomatohamburger/tomatohamburger.module').then( m => m.TomatohamburgerPageModule)
  },
  {
    path: 'companyhistory',
    loadChildren: () => import('./pages/companyhistory/companyhistory.module').then( m => m.CompanyhistoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
