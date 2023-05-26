import { Component, OnInit } from '@angular/core';
import { RncoService } from 'app/services/rncoService';
import { NotificationService } from 'app/services/notification';
import { AbstractControl, FormControl, FormGroup, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
}) 
export class AddProductComponent implements OnInit {
  isLogOutModalOpen = false;
  constructor(
    public notification: NotificationService,
    public rncoService: RncoService,
    public router: Router,
    private fb:FormBuilder
  ) { }
  merchantForm: FormGroup
  
  ngOnInit(): void {
    this.getUserId();
    this.validProduct = false;
    this.ImageCheck = false;
   
  }
 get merchantFormControl(){
   return this.merchantForm.controls;
 }
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
  // ===========New data================
  ImageArray: any =[];
  ImageUrls: any = [];
  fileURL: any;
  productImage: File = null;
  productFormData = new FormData();
  // ==================================
  productName: string;
  productCode: string;
  unitPrice: number;
  quantity: number;
  deliveryDuration: number;
  deliveryOption: string;
  brandName: string;
  category: string;
  description: string;
  deliveryPeriod: string;
  // productPayoutConfig: {
      rate: number;
      conversionType: string;
      percent: boolean;
      amountPerConversion: number;
  // };
  merchant: {
      id: number
  }
  userId: number
  // default value
  // functions
  getUserId(){
    const userString = localStorage.getItem('userId')
console.log('userString' +  userString);
    this.userId = parseInt(userString)

  }
  // ==============Image Uploade functions & variables =============================
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  
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
            if(this.ImageArray.length < 6){
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
    if(this.conversionType == 'AMOUNT'){
      if(this.rate >= this.unitPrice){
        this.validProduct = false
        this.notification.alertInfo("Commission can't be greater or equal to Price")
      }else{
        this.validProduct = true
      }
    } else if(this.conversionType == 'PERCENT'){
      if(this.rate > 50){
        this.validProduct = false;
        this.notification.alertInfo("Commission can't be greater or equal to 50 percent")
      } else{
        this.validProduct = true
      }
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
  validValues: boolean;
  checkValues(){
    
  }
  // ========================
  submitform(){
    this.checkArray()
    if(this.conversionType == 'PERCENT'){
      this.percent = true;
      this.amountPerConversion = (this.rate * this.unitPrice)/100;
    } else if( this.conversionType == 'AMOUNT'){
      this.percent = false;
      this.amountPerConversion = this.rate;
    }else if(!this.productName 
      && !this.productCode
       && !this.unitPrice 
       && !this.quantity
       && !this.deliveryDuration
       && !this.deliveryOption
       && !this.category
       && !this.deliveryPeriod
       && !this.rate){
        this.notification.alertInfo('Fields cannot be empty');
       }else if(!this.productName || !this.productName.trim()){
        this.notification.alertInfo("Product Name cannot be empty")
       }else if(!this.productCode || !this.productCode.trim()){
        this.notification.alertInfo("Product Code cannot be empty")
       }else if(!this.unitPrice){
        this.notification.alertInfo("Unit Price cannot be empty")
       }else if(!this.quantity){
        this.notification.alertInfo("Quantity cannot be empty")
       }else if(!this.deliveryDuration){
        this.notification.alertInfo("Delivery Duration cannot be empty")
       }else if(!this.deliveryOption){
        this.notification.alertInfo("Delivery Option cannot be empty")
       }else if(!this.category){
        this.notification.alertInfo("Category cannot be empty")
       }else if(!this.deliveryPeriod){
        this.notification.alertInfo("Delivery Period cannot be empty")
       }else if(!this.rate){
        this.notification.alertInfo("Rate cannot be empty")
       }else{
        const data = {
          productName:  this.productName,
          productCode: this.productCode,
          unitPrice: this.unitPrice,
          quantity: this.quantity,
          deliveryDuration: this.deliveryDuration,
          deliveryOption: this.deliveryOption,
          brandName: this.brandName,
          category: this.category,
          description: this.description,
          deliveryPeriod: this.deliveryPeriod,
          productPayoutConfig: {
              rate: this.rate,
              conversionType: 'PPC',
              percent: true,
              amountPerConversion: this.amountPerConversion
          },
          merchant: {
              id: this.userId
          }
        }
        // Iterate through product images and parse to formdata
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
      this.router.navigate(['/merchant/dashboard']);
       }
   
       
     // }
      
  }
}
