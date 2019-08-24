import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../service/user.service';
import {UserForListDtoModel} from '../model/UserForListDto.model';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {PageableDtoModel} from '../model/PageableDto.model';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-moderate-registered-users',
  templateUrl: './moderate-registered-users.component.html',
  styleUrls: ['./moderate-registered-users.component.css']
})
export class ModerateRegisteredUsersComponent implements OnInit {

  users: UserForListDtoModel[];
  pageSize = 3;
  page = 1;
  totalItems: number;

  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'dateOfRegistration', 'block', 'deactivate'];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getUsersByPage();
  }

  getCurrentPaginationSettings(): string {
    return '?page=' + (this.page - 1) + '&size=' + this.pageSize;
  }

  updateUserStatus(id: number, userStatus: string) {
    this.userService.updateUserStatus(id, userStatus).subscribe((data) => {
      this.ngOnInit();
    });
  }

  getUsersByPage() {
    this.userService.getAllUsers(this.getCurrentPaginationSettings()).subscribe(res => {
      this.users = res.page;
      this.page = res.currentPage;
      this.totalItems = res.totalElements;
    });
  }

  paginate(event: any) {
    this.getUsersByPage();
  }

  changePage(event: any) {
    this.page = event.page;
    this.getUsersByPage();
  }
}
