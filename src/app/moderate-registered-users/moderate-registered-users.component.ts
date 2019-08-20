import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {UserForListDtoModel} from '../model/UserForListDto.model';
import {HttpClient} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-moderate-registered-users',
  templateUrl: './moderate-registered-users.component.html',
  styleUrls: ['./moderate-registered-users.component.css']
})
export class ModerateRegisteredUsersComponent implements OnInit {

  pageSize = 3;
  page = 0;

  users: UserForListDtoModel[];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'dateOfRegistration'];
  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getAllUsers(this.getCurrentPaginationSettings()).subscribe(res => {
      this.users = res;
    });
  }

  getCurrentPaginationSettings(): string {
    return '?page=' + (this.page - 1) + '&size=' + this.pageSize;
  }

}
