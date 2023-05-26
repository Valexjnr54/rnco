import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})

export class SideBarService{
    SidebarToggle = new BehaviorSubject<boolean>(false);
} 