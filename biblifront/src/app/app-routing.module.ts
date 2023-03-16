import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BookmarksPageComponent } from './pages/bookmarks-page/bookmarks-page.component';
import { ForthcomingPageComponent } from './pages/forthcoming-page/forthcoming-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SelectedBookComponent } from './pages/selected-book/selected-book.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'subscribe',
    component: SubscribePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'bookmarks',
    component: BookmarksPageComponent
  },
  {
    path: 'forthcoming',
    component: ForthcomingPageComponent
  },
  {
    path: 'selectedbook',
    component: SelectedBookComponent
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
