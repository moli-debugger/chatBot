import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { MessageBoxComponent } from './message-box/message-box.component';
import { PastConversationComponent } from './past-conversation/past-conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageBoxComponent,
    PastConversationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
