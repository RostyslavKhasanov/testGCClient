import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ModerateRegisteredUsersComponent } from './moderate-registered-users/moderate-registered-users.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ModerateRegisteredUsersComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
