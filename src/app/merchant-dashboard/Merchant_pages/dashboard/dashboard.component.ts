import{SideBarService}from'./../../../sidebar.service';
import {Component, OnInit, Input, AfterViewChecked, Output, AfterViewInit}from '@angular/core';
import { RncoService}from 'app/services/rncoService';
import {Subject}from 'rxjs';
import {LoginmodalService}from 'app/loginmodal.service';
@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewChecked,AfterViewInit {
isLogout = false;
isSideBarOpen = false;
submitSucessful = false;
products: any
user: any
productCount: number
listedProductCount = []
constructor(
    public rncoService: RncoService,
    private sideBarService: SideBarService,
    public modalService: LoginmodalService
  ) { }
  // type checking
  loggedinUser: string
  ngOnInit(): void {
 console.log('in here  ngOnInit')

    // get current user
    this.loggedinUser = localStorage.getItem('current_user')
    this.getUser()
    this.getProducts()
  }


 ngAfterViewInit():void{
 console.log('in here  ngAfterViewInit')
 this.getProducts();
  }

  sidebarSubject = new Subject<boolean>();
  sidebarToggle() {
    this.sidebarSubject.next(true);
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }
  ngAfterViewChecked() {
    this.sideBarService.SidebarToggle.subscribe(e => {
      console.log(e)
    })
    this.modalService.showDialog.subscribe(e => {
      console.log(e)
    })
  }
  getUser() {
    const user = localStorage.getItem('userId')
    this.rncoService.GetVerifiedMerchant(user).subscribe((res) => {
      console.log(res)
      this.user = res
    })
  }
  loginOpen() {
    this.submitSucessful = true;
  }
  getProducts() {
    const userId = localStorage.getItem('userId');
    this.rncoService.GetAllProduct(userId).subscribe((res) => {
      this.products = res;
      // loop through Products
      this.products.forEach(element => {
        if (element.isListed == true) {
          this.listedProductCount.push(element)
          this.listedProductCount.length
        }
      });
      // count items in products
      let count = 0;
      for (let properties in this.products) {
        count = count + 1
        this.productCount = count
      }
    })
  }
}
