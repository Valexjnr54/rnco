import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification';
import { RncoService } from 'app/services/rncoService';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent {
  constructor(
    public notification: NotificationService,
   public rncoService: RncoService,
   public router: Router,
 ) { }

ngOnInit(): void {
this.getUserId()
 }
 isLogOutModalOpen = false;
 logOutModalToggle(value:any){
  this.isLogOutModalOpen = value;
}
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


 getUserId(){
   const userString = localStorage.getItem('userId')
console.log('userString' + userString);
   this.userId = parseInt(userString)
 }
  shortLink: string = "";
 loading: boolean = false;

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
             this.ImageArray.splice(xIndex, 1);
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
             this.notification.alertInfo('Please a max of 6 images')
             console.log(imgUrls, this.ImageArray);
           }
         } else {
           this.notification.alertInfo('Image already exists')
         }
       }
     }
   }
 }


 // ===================== CHECKS AND VALIDATION ====================
 validProduct: boolean;
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


 ImageCheck: boolean;
 checkArray(){
   if(this.ImageArray.length == 0 && this.ImageArray.length > 6){
     this.validProduct = false
     this.notification.alertInfo("Please Confirm your Image length")
   } else {
     this.validProduct = true;
   }
 }


 submitform() {
   this.checkArray()


   if (!this.productImage &&!this.productName && !this.category && !this.productCode && !this.unitPrice && !this.quantity && !this.desc && !this.deliveryPeriod && !this.duration && !this.conversionType && !this.options && !this.rate) {
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
     this.notification.alertInfo("Commision Type cannot be empty")
   } else if (!this.rate || !this.rate.valueOf()) {
     this.notification.alertInfo("commission percent or amount cannot be empty")
   }else if (!this.desc || !this.desc.valueOf()) {
     this.notification.alertInfo("Product description cannot be empty")
   }else if (!this.options || !this.options.trim()) {
     this.notification.alertInfo("Delivery options cannot be empty")
   } else if ((this.conversionType == 'AMOUNT') && (this.rate > (0.5* this.unitPrice))) {
       this.notification.alertInfo("Commision amount cannot be greater than 50% of unit price")
   }else if ((this.conversionType == 'PERCENT') && (this.rate > 50)) {
       this.notification.alertInfo("Commision percent cannot be greater than 50")
   }else {

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
     
    //  console.log(this.productFormData)
       // call api and pass data
     
         this.rncoService.CreateProduct(this.productFormData).subscribe((res)=>{
         this.notification.alertSucess('Product Created Successfully');
       });
        this.router.navigate(['/merchant/dashboard'])
    
       
   }
   
 }
}


