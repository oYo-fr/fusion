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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OptionsComponent } from './options/options.component';
import { TemplateComponent } from './template/template.component';
import { DataComponent } from './data/data.component';
import { OutputComponent } from './output/output.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    TemplateComponent,
    DataComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
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
