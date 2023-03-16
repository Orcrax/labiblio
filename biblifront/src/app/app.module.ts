import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BookmarksPageComponent } from './pages/bookmarks-page/bookmarks-page.component';
import { ForthcomingPageComponent } from './pages/forthcoming-page/forthcoming-page.component';
import { SelectedBookComponent } from './pages/selected-book/selected-book.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SubscribePageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    NavigationBarComponent,
    SettingsPageComponent,
    SearchPageComponent,
    BookmarksPageComponent,
    ForthcomingPageComponent,
    SelectedBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
