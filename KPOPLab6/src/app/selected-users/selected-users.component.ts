// src/app/selected-users/selected-users.component.ts
import { Component } from '@angular/core';
import { UserSelectionService } from '../user-selection.service';
import { UserDetailsPopupComponent } from '../user-details-popup/user-details-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-selected-users',
  templateUrl: './selected-users.component.html',
  styleUrls: ['./selected-users.component.scss'],
})
export class SelectedUsersComponent {
  selectedUsers: any[] = [];

  constructor(private dialog: MatDialog,
    private userSelectionService: UserSelectionService) {
    this.userSelectionService.selectedUsers$.subscribe((users) => {
      this.selectedUsers = users;
    });
  }

  showDetails(user: any) {
    this.dialog.open(UserDetailsPopupComponent, {
      width: '400px',
      data: user
    });
  }


  removeFromSelectedUsers(user: any) {
    this.userSelectionService.removeFromSelectedUsers(user);
  }
}
