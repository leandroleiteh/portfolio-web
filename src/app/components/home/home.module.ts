import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { BtnPrimaryComponent } from 'src/app/shared/btn-primary/btn-primary.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainAnimationComponent } from 'src/app/shared/main-animation/main-animation.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { HttpClientModule } from '@angular/common/http';
import { MainAboutMeComponent } from 'src/app/shared/main-about-me/main-about-me.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainAnimationComponent,
    MainSectionComponent,
    MainAboutMeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  exports: [ HomeComponent]
})
export class HomeModule { }
