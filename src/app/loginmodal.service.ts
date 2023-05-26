import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginmodalService {
  
  showDialog = new BehaviorSubject<boolean>(false)

  
}
