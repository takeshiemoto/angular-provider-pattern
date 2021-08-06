import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterViewComponent } from './counter-view.component';
import { IncrementButtonComponent } from './increment-button.component';
import { DecrementButtonComponent } from './decrement-button.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterViewComponent,
    IncrementButtonComponent,
    DecrementButtonComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
