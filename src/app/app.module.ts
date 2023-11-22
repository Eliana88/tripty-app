import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { RouterModule, Routes } from '@angular/router';
import { DestinosComponent } from './destinos/destinos.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: DirectivaComponent},
  {path: 'destinos', component: DestinosComponent},
  {path: 'chatbot', component: ChatbotComponent},
  {path: 'contacto', component: ContactusComponent},
  {path: 'paquetes', component: PaquetesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    DestinosComponent,
    ChatbotComponent,
    ContactusComponent,
    PaquetesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC823Y1ppX4b94lpjvYhMvdnjB0mN57yBY",
  authDomain: "tripty-bot.firebaseapp.com",
  projectId: "tripty-bot",
  storageBucket: "tripty-bot.appspot.com",
  messagingSenderId: "288863908311",
  appId: "1:288863908311:web:b35a432c58b6b48ab19b92",
  measurementId: "G-FJDHHYD226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
