import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HttpClient usage
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ClothComponent } from './cloth/cloth.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { OrderService } from './order/order.service'; // Import OrderService

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent },
  { path: 'cloth', component: ClothComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'models', component: ModelsComponent },

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
    FormsModule,
    ReactiveFormsModule,
    GooglePayButtonModule,
    HttpClientModule, // Add HttpClientModule to imports
    RouterModule.forRoot(routes)
  ],
  providers: [], // Provide OrderService here
  bootstrap: [AppComponent]
})
export class AppModule { }
