
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { BillboardPageComponent } from './pages/billboard-page/billboard-page.component';
import { AddMessagePageComponent } from './pages/add-message-page/add-message-page.component';
import { EditMessagePageComponent } from './pages/edit-message-page/edit-message-page.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesContainerComponent } from './components/messages-container/messages-container.component';
import { MessageFieldsComponent } from './components/message-fields/message-fields.component';
import { TitleComponent } from './components/title/title.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    BillboardPageComponent,
    AddMessagePageComponent,
    EditMessagePageComponent,
    MessageComponent,
    MessagesContainerComponent,
    MessageFieldsComponent,
    TitleComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({ ...environment.firebase })),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
