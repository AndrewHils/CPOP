import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserDetailsPopupComponent } from './user-details-popup/user-details-popup.component';
import { SelectedUsersComponent } from './selected-users/selected-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserDetailsPopupComponent,
    SelectedUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserDetailsPopupComponent] // Add this line
})
export class AppModule { }
