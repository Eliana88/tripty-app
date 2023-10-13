import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';

import { RouterModule, Routes } from '@angular/router';
import { DestinosComponent } from './destinos/destinos.component';
import { DetalleComponent } from './detalle/detalle.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: DirectivaComponent},
  {path: 'destinos', component: DestinosComponent},
  {path: 'detalle', component: DetalleComponent},
  {path: 'chatbot', component: ChatbotComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    DestinosComponent,
    DetalleComponent,
    ChatbotComponent,

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

////VER ESTADISTICAS////

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
