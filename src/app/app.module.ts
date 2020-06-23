import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from "@angular/forms";
import { MonacoEditorModule } from 'ngx-monaco-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    FormsModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
