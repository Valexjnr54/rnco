import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/admin/user-profile', title: 'Merchant',  icon:'person', class: '' },
    { path: '/admin/merchant', title: 'Affiliate',  icon:'person', class: '' },
    { path: '/admin/bank-config', title: 'Bank Configuration',  icon:'content_paste', class: '' },
    { path: '/admin/product', title: 'Product',  icon:'library_books', class: '' },
    { path: '/admin/product-content', title: 'Product Content',  icon:'content_paste', class: '' },
    // { path: '/landing', title: 'Log Out',  icon:'login-variant', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
