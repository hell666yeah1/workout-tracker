import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdCardModule, MdButtonModule, MdCheckboxModule, MdMenuModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { ToolsComponent } from './tools/tools.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'workout-plans', component: WorkoutPlanComponent },
  { path: 'diet-plans', component: DietPlanComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/HomeComponent',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WorkoutPlanComponent,
    DietPlanComponent,
    ToolsComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule, 
    MdMenuModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
