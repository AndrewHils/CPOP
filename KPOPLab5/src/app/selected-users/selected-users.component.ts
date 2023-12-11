// src/app/selected-users/selected-users.component.ts
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsPopupComponent } from '../user-details-popup/user-details-popup.component';

@Component({
  selector: 'app-selected-users',
  templateUrl: './selected-users.component.html',
  styleUrls: ['./selected-users.component.css']
})
export class SelectedUsersComponent {
  @Input() selectedUsers: Set<any> = new Set();

  constructor(private dialog: MatDialog) {}

  showDetails(user: any) {
    this.dialog.open(UserDetailsPopupComponent, {
      width: '300px',
      data: user
    });
  }
}
