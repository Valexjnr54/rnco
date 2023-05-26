import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.scss']
})
export class AdminNavBarComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.toggleSidebarForMe.emit();
  }

}
