import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { NavigationService } from 'app/services/navigation.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss']
})
export class AdminAddProductComponent implements OnInit {

  constructor(
    public notification: NotificationService,
    public rncoService: RncoService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
     private navigation: NavigationService,
    private location:Location
  ) { }
  ImageArray: any =[];
 ImageUrls: any = [];
 fileURL: any;
 productImage: File = null;
 productFormData = new FormData();

 productName: string
 category: string
 productCode: string
 unitPrice:number
 quantity: number
 deliveryPeriod: string
 duration: number
 conversionType: string
 rate: number
 desc: string
 options: string
 userId: number
 isProducts: true
 amountPerConversion: number;
  percent: boolean;
    merchant: {
     id: number
 }
  ngOnInit(): void {
    this.getUserId();
   
  }
  isLogOutModalOpen = false;
  logOutModalToggle(value:any){
    this.isLogOutModalOpen = value;
  }


  //Custom Validators
  RateValidator():ValidatorFn{
    return(control:AbstractControl):ValidationErrors |null =>{
          
      const unitprice = control.get('unitPrice');
      const rate = control.get('rate');
      const commission = unitprice.value *0.5 - unitprice.value;

      if(commission > rate.value ){
        return {RateValidator:true}   
      }
       return null;   
    }
  } 
  validProduct: boolean;
 //  checkRate(){
  //  if(this.conversionType == 'AMOUNT'){
 //     if(this.rate >= this.unitPrice){
//        this.validProduct = false
//        this.notification.alertInfo("Commission can't be greater or equal to Price")
//      }else{
////        this.validProduct = true
 //     }
 //   } else if(this.conversionType == 'PERCENT'){
 //     if(this.rate > 50){
 //       this.validProduct = false;
 //       this.notification.alertInfo("Commission can't be greater or equal to 50 percent")
 //     } else{
 //       this.validProduct = true
 //     }
 //   }
 // }

checkRate(){
   if ((this.conversionType == 'AMOUNT') && (this.rate > (0.5* this.unitPrice))) {
       this.notification.alertInfo("Commision amount cannot be greater than 50% of unit price")
       this.rate = null
   }

  if ((this.conversionType == 'PERCENT') && (this.rate > 50)) {
       this.notification.alertInfo("Commision percent cannot be greater than 50%")
      this.rate = null
   }
 }

 
  getUserId(){
    // get Merchant ID from params
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.userId = parseInt(params.id)
      }
    )
  }
  // ================Image Functions ====================
  deleteImage(x){
    for( var i = 0; i < this.ImageUrls.length; i++){ 
      if ( this.ImageUrls[i] === x) { 
        // loop through ImageArrays
        this.ImageArray.forEach((element, index) => {
          const reader = new FileReader();
          reader.readAsDataURL(element);
          reader.onload = (_event) => {
            if(reader.result == x){
              const xIndex = this.ImageUrls.indexOf(x)
              this.ImageArray.splice(index, 1);
              this.ImageUrls.splice(xIndex, 1);
            }
          }
        });
      }
    }
  }
  uploadImage(event:any){
    const mimeType = event.target.files[0].type;
    // for getting product model
    // image Check
    if(event.target.files[0].size >= 1000000){
      this.notification.alertInfo("please your file should be less than 1mb")
      return;
     
    }else if(!event.target.files && !event.target.files[0]){
      this.notification.alertInfo("Image cannot be empty");
      return;
       // check if file is an image
    } else if (!mimeType.match('image/*')) {
      this.notification.alertInfo("Only images are supported");
        return;
    } else{
      this.productImage = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.productImage);
      reader.onload = (_event) => {
        if(reader !== null || reader !== undefined){
          // check if Image is already loaded in the ImageUrls array
          let imgUrls = this.ImageUrls
          if(!imgUrls.includes(reader.result)){
            if(this.ImageArray.length <= 6){
              this.ImageUrls.push(reader.result)
              this.ImageArray.push(this.productImage);
            } else{
              alert('Please a max of 6 images')
            }
          } else {
            alert('Image already exists')
          }
        }
      }
    }
  }

  ImageCheck: boolean;
  checkArray() {
    if (this.ImageArray.length == 0 && this.ImageArray.length > 6) {
      this.validProduct = false
      this.notification.alertInfo("Please Confirm your Image length")
    } else {
      this.validProduct = true;
    }
  }
  // ============================================================
 submitform() {
   this.checkArray()
//   if (this.conversionType == 'PERCENT') {
 //    this.percent = true;
 //    this.amountPerConversion = (this.rate * this.unitPrice) / 100;
 //  } else{
  //   this.conversionType == 'AMOUNT'
  //   this.percent = false;
  // };

   if (!this.productImage && !this.productName && !this.category && !this.productCode && !this.unitPrice && !this.quantity && !this.desc && !this.deliveryPeriod &&  !this.duration && !this.conversionType && !this.options && !this.rate) {
     this.notification.alertInfo("Fields cannot be empty")
   } else if (!this.productImage) {
          this.notification.alertInfo("Product Image cannot be empty")
   } else if (!this.productName || !this.productName.trim()) {
     this.notification.alertInfo("Product Name cannot be empty")
   } else if (!this.category || !this.category.trim()) {
     this.notification.alertInfo("Category cannot be empty")
   } else if (!this.productCode || !this.productCode.trim()) {
     this.notification.alertInfo("Product code cannot be empty")
   } else if (!this.unitPrice || !this.unitPrice.valueOf()) {
     this.notification.alertInfo("Unit Price cannot be empty")
   } else if (!this.quantity || !this.quantity.valueOf()) {
     this.notification.alertInfo("Quantity cannot be empty")
   }else if (!this.deliveryPeriod || !this.deliveryPeriod.valueOf()) {
     this.notification.alertInfo("Delivery period cannot be empty")
   }else if (!this.duration || !this.duration.valueOf()) {
     this.notification.alertInfo("Duration cannot be empty")
   } else if (!this.conversionType || !this.conversionType.trim()) {
     this.notification.alertInfo("Conversion Type cannot be empty")
   } else if (!this.rate || !this.rate.valueOf()) {
     this.notification.alertInfo("commission percent or amount cannot be empty")
   } else if (!this.desc || !this.desc.valueOf()) {
     this.notification.alertInfo("Product description cannot be empty")
   }else if (!this.options || !this.options.trim()) {
     this.notification.alertInfo("Delivery options cannot be empty")
   }else if ((this.conversionType == 'AMOUNT') && (this.rate > (0.5* this.unitPrice))) {
       this.notification.alertInfo("Commision amount cannot be greater than 50% of unit price")
   }else if ((this.conversionType == 'PERCENT') && (this.rate > 50)) {
       this.notification.alertInfo("Commision percent cannot be greater than 50")
   } else {

     const data = {
         productName:  this.productName,
         productCode: this.productCode,
         unitPrice: this.unitPrice,
         quantity: this.quantity,
         deliveryDuration: this.duration,
         deliveryOption: this.options,
         category: this.category,
         description: this.desc,
         deliveryPeriod: this.deliveryPeriod,
         productPayoutConfig: {
             rate: this.conversionType == 'PERCENT' ? this.rate: null,
             conversionType: 'PPC',
             percent: this.conversionType == 'PERCENT' ? true: false,
             amountPerConversion: this.conversionType == 'AMOUNT' ? this.rate: null,
         },
         merchant: {
             id: this.userId
         }
        }
        this.ImageArray.forEach(file => {
         if(file !== '' || file !== undefined || file !== null){
           this.productFormData.append('files', file);
         }
       });
   
       this.productFormData.append('model', JSON.stringify(data));
       // call api and pass data
       this.rncoService.CreateProduct(this.productFormData).subscribe((res)=>{
         this.notification.alertSucess('Product Created Successfully');
       });
        this.router.navigate(['/admin/products']);
        this.location.back();
   }
   
 }
}
