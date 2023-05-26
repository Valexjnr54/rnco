import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }
  Logout = new BehaviorSubject<boolean>(false);
}
