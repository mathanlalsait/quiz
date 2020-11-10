import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';

import { Router, RouterModule, Routes } from '@angular/router';
import '@fortawesome/fontawesome-free/js/all.js';
import { InstructionComponent } from './instruction/instruction.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from './service/question.service';


const routes: Routes = [
  {path:'question/:name',component:QuestionComponent},
  {path:'instruction/:name',component:InstructionComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    InstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
