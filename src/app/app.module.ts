import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    TopBarComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
