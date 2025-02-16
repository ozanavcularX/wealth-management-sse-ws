import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SsePageComponent } from './pages/sse-page/sse-page.component';
import { WsPageComponent } from './pages/ws-page/ws-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SsePageComponent,
    WsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
