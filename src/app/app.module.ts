import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{PostCeateComponent} from './posts/post-create/post-create.component';
import{HeaderComponent} from './header/header.component';

import {MatInputModule} from '@angular/material/input';
import{MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    PostCeateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
