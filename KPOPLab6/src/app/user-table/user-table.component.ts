// src/app/user-table/user-table.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserSelectionService } from '../user-selection.service';
import { UserDetailsPopupComponent } from '../user-details-popup/user-details-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: any[] = [];

  constructor(private dialog: MatDialog,
    private apiService: ApiService,
    private userSelectionService: UserSelectionService
  ) {}

  ngOnInit() {
    this.apiService.getEmployees().subscribe((data) => {
      this.users = data.results;
    });
  }

  showDetails(user: any) {
    this.dialog.open(UserDetailsPopupComponent, {
      width: '400px',
      data: user
    });
  }

  addToSelectedUsers(user: any) {
    this.userSelectionService.addToSelectedUsers(user);
  }
}
