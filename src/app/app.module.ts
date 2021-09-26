import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { CrudService } from './service/crud.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule

  
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
