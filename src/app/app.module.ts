import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
    StorageServiceModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
