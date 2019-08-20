import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserForListDtoModel} from '../model/UserForListDto.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl += '/user';
  }

  getAllUsers(paginationSettings: string): Observable<UserForListDtoModel[]> {
    return this.http.get<UserForListDtoModel[]>(`${this.apiUrl}` + paginationSettings);
  }
}
