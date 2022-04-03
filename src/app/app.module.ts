import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { ConversorModule } from './conversor/conversor.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    EmailVerificationComponent,
    PasswordResetComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogoDaVelhaModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
 
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
