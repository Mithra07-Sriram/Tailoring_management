// Import necessary components
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';  // Make sure to import Routes
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ClothComponent } from './cloth/cloth.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
// Define your routes as an array of Route objects
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'models', component: ModelsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'cloth', component: ClothComponent },
  { path: 'contact', component: ContactComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OrderComponent,
    ClothComponent,
    ContactComponent,
    HomeComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Use RouterModule.forRoot() with your routes
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
