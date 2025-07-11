import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/Pages/Auth/register/register.component';
import { LoginComponent } from './Components/Pages/Auth/login/login.component';
import { LandingComponent } from './Components/Pages/landing/landing.component';


export const routes: Routes = [
  { 
    path: 'home', 
    component: LandingComponent
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: '', 
    redirectTo: '/register', // Default route (redirect to register)
    pathMatch: 'full' 
  },
  // { path: '**', component: NotFoundComponent } // Optional: 404 route
];