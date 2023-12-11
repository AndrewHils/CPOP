// src/app/user-table/user-table.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserDetailsPopupComponent } from '../user-details-popup/user-details-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'username', 'phone', 'actions'];
  
  selectedUsers: Set<any> = new Set();

  constructor(private dialog: MatDialog,
    private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.results;
    });
  }

  showDetails(user: any) {
    this.dialog.open(UserDetailsPopupComponent, {
      width: '300px',
      data: user
    });
  }

  
  addToSelectedUsers(user: any) {
    this.selectedUsers.add(user);
  }

  removeFromSelectedUsers(user: any) {
    this.selectedUsers.delete(user);
  }
}
