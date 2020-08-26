import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSliderModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    MatSliderModule, 
    RouterModule.forRoot([
      {path: 'help', component: HelpComponent },
    ])],
  declarations: [ AppComponent, HelpComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
