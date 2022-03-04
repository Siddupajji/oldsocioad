import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotoComponent } from './photo/photo.component';
import { SmmComponent } from './smm/smm.component';
import { VideoComponent } from './video/video.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
 },
 {
   path: "home",
   component:HomeComponent
 },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "web",
    component: WebComponent
  },
  {
    path: "app",
    component: ApplicationComponent
  },
  {
    path:"smm",
    component:SmmComponent
  },
  {
    path:"logo",
    component:LogoComponent

  }
  ,
  {
    path:"photo",
    component:PhotoComponent

  }
  ,
  {
    path:"video",
    component:VideoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
