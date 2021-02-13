import { Component, OnInit } from '@angular/core';

import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  public users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.users = users.users.data;
      });
  }

}
