import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ModifiedDate } from '../../interfaces/modified-dates.interface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [
  ]
})
export class UsersTableComponent implements OnInit {

  @Input() public users: User[] = [];
  public user!: User;
  public modifiedDates: ModifiedDate [] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getModifiedDates();
  }

  public getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.users = users.users.data;
      });
  }

  public createUser(): void {
    const user: User = {
      id: 0,
      name: 'Maria',
      email: 'mariaperez01@gmail.com',
      password: 'Mar14.',
      password_confirmation: 'Mar14.',
      age: 24,
      gender: 'Female',
      address: 'Calle 70 # 45 - 30',
      created_at: '',
      updated_at: ''
    }

    this.userService.createUser(user)
      .subscribe((user: any) => {
        this.getUsers();
        this.getModifiedDates();
      });
  }

  public findUser(id: number): void {
    this.userService.findUser(id)
      .subscribe((user: any) => {
        this.user = user.user;
        this.getUsers();
        this.getModifiedDates();
      });
  }

  public deleteUser(id: number): void {
    this.userService.deleteUser(id)
      .subscribe((user: any) => {
        this.getUsers();
        this.getModifiedDates();
      });
  }

  public getModifiedDates() {
    this.userService.getModifiedDates()
      .subscribe((modifiedDates: any) => {
        this.modifiedDates = modifiedDates.modifiedDates;
      });
  }

  public filterUsers(modifiedDate: string) {
    console.log(modifiedDate);
  }

}
