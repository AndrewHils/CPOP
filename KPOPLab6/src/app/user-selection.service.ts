// src/app/services/user-selection.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSelectionService {
  private selectedUsersSubject = new BehaviorSubject<any[]>([]);
  selectedUsers$ = this.selectedUsersSubject.asObservable();

    constructor(private storage: Storage) {
      this.init();
    }
  
    async init() {
      await this.storage.create();
      // Now the storage is created and can be used
    }

  async loadSelectedUsers() {
    const selectedUsers = await this.storage.get('selectedUsers');
    this.selectedUsersSubject.next(selectedUsers || []);
  }

  addToSelectedUsers(user: any) {
    const currentSelectedUsers = this.selectedUsersSubject.value;
    const updatedUsers = [...currentSelectedUsers, user];
    this.storage.set('selectedUsers', updatedUsers);
    this.selectedUsersSubject.next(updatedUsers);
  }

  removeFromSelectedUsers(user: any) {
    const currentSelectedUsers = this.selectedUsersSubject.value;
    const updatedUsers = currentSelectedUsers.filter(u => u !== user);
    this.storage.set('selectedUsers', updatedUsers);
    this.selectedUsersSubject.next(updatedUsers);
  }
}
