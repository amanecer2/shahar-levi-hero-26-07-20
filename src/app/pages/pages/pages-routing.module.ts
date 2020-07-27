import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {STRINGS} from '../../constant/string.constant';


const routes: Routes = [
  {
    path: '',
    redirectTo: STRINGS.HOME,
    pathMatch: 'full'
  },
  {
    path: STRINGS.HOME,
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: STRINGS.FAVORITE,
    loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoriteModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
