import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _usersService: UsersService) { }
  id:number;

  public searchText : string;
  public users = [];

  deleteContacts(user): void {
    this._usersService.deleteContacts(user.id)
      .subscribe( data => {
        this.users = this.users.filter(data => data !== user);
      })
  };

  ngOnInit() {
    this._usersService.fetchContacts()
        .subscribe(data => this.users = data);
  }



}
