import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SupportedBank } from 'models/supportedBank';
import { LoginAuth } from 'models/loginAuth';
import { CreateMerchant } from 'models/createMerchant';
import { CreateMerchantBusiness } from 'models/createMerchantBusiness';
import { AddMerchantBank } from 'models/addMerchantBank';
import { Product } from 'models/product';
import { CreateBank } from 'models/createBank';
import { Affiliates } from 'models/Affiliates';
import { ProductContent } from 'models/productContent';
import { map } from 'rxjs/operators';
import { NotificationService } from 'app/services/notification'
import { CreateProduct } from 'models/createProduct';
import { EditProduct } from 'models/EditProduct';
import { createAffiliate } from 'models/createAffiliate';
import { CreateAffiliateBusiness } from 'models/createAffiliateBusiness';
import { AddAffiliateBank } from 'models/addAffiliateBank';
import { AddCampaign } from 'models/addCampaign';
import { UpdateBank } from 'models/UpdateBank';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root',
})
export class RncoService {
  
  // Base url
  // baseurl = 'https://rnco.herokuapp.com/rnco/api';
  baseurl = 'https://api-rnco.com/rnco';
  // baseurl = 'http://localhost:4200/api';
  errorMessage: any;
  testNotif: NotificationService;
  constructor(
    private http: HttpClient,
    private notification: NotificationService
    ) {}
    
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  this.getToken()
    }),
  };
  // http options for from upload
  httpsOptionsForm = {
    headers: new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': this.getToken()
    }),
  }
  httpsOptionsBasic = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  }
  httpOptionsLogin :object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe : 'response',
    responseType: 'json',

  };
  // Public key
  // token :'sk_test_86e6a904ca5d1fda2e18b9e1b049f5108dcb6a5e'
  token: 'pk_test_1ee15a4e46d24549c8ef8214974c0d5ac3de6e4b';

  //PAYSTACK
  httpOptionsPaystack = {
    headers: new HttpHeaders({
     // 'Content-Type': 'application/json',
      'Authorization': "Bearer sk_test_86e6a904ca5d1fda2e18b9e1b049f5108dcb6a5e"
    }),
  };

  authorities =["ROLE_ADMIN"]

  // POST
  LoginAuth(data: any): Observable<any> {
    localStorage.setItem('access_token', data.id_token)
    return this.http
      .post<any>(
        this.baseurl + '/api/authenticate',
        JSON.stringify(data),
        this.httpOptionsLogin
      ) 
      .pipe(retry(1), catchError(this.errorHandl));      
  }

  //logout
  Logout(){
    localStorage.removeItem('access_token');
    return this.http
      .get(
        this.baseurl + '/api/logout',
        this.httpOptions
      ) 
      .pipe(retry(1), catchError(this.errorHandl));      
  }
  // Resend Activation link
  ResendActivationLink(email){
    return this.http
     .get(
      this.baseurl + `/api/account/send-activation-mail?email=${email}`,
      this.httpOptionsLogin
     )
     .pipe(retry(1), catchError(this.errorHandl))
  }
  // get stored token
  getToken() {
    return localStorage.getItem('access_token');
  } 

  GetSupportedBank(): Observable<SupportedBank> {
    return this.http
      .get<SupportedBank>(this.baseurl + '/api/supported-bank-accounts',this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // get paystack reference
  GetPaystackReference(id:any){
    return this.http
     .get(this.baseurl + '/api/account/generate-reference/' + id,this.httpOptions)
     .pipe(retry(1), catchError(this.errorHandl));
  }
  // Verify paystack transaction
  VerifyPaystackTransaction(ref:any){
    return this.http
    .get(
      this.baseurl + 
      '/api/account/verify-transaction/' + ref,
      this.httpOptions)
   .pipe(retry(1), catchError(this.errorHandl));
  }
  // =======================================================
  // Merchant calls
  // ======================================================
  GetAllMerchants() {
    return this.http.get(
      this.baseurl + '/api/merchants/all',
      this.httpOptions
    ).pipe(retry(1),catchError(this.errorHandl))
  }
  RegisterMerchant(data): Observable<CreateMerchant> {
    return this.http
      .post<CreateMerchant>(
        this.baseurl + '/api/merchants/register',
        JSON.stringify(data),
        this.httpOptionsLogin
      )
      .pipe(map((response):any=>{
      }),retry(1), catchError(this.errorHandl))
  }
  AdminRegisterMerchant(data):Observable<CreateMerchant> {
    return this.http.post<CreateMerchant>(
      this.baseurl + '/api/merchants/create',
      JSON.stringify(data),
      this.httpOptions
    ).pipe(retry(1),catchError(this.errorHandl))
  }
  UpdateMerchantDetails(data): Observable<CreateMerchant> {
    return this.http
      .put<CreateMerchant>(
        this.baseurl + '/api/merchants',
        JSON.stringify(data),
        this.httpOptions
      ) 
      .pipe(retry(1), catchError(this.errorHandl));     
  }
  // create merchant business UpdateProductDetails
  UpdateMerchantaccount(data, id): Observable<CreateMerchantBusiness>{
    return this.http.put<CreateMerchantBusiness>(
      this.baseurl + '/api/merchants/update-bank-account/'+ id,
      JSON.stringify(data), 
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }


     //Update bank
  UpdateMerchantBusinessDetails(data, id): Observable<CreateMerchantBusiness>{
    return this.http.put<CreateMerchantBusiness>(
      this.baseurl + '/api/merchants/add-business-details/'+ id,
      JSON.stringify(data), 
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }

  // Add business details
  // Uplaod merchant document
  EditMerchantBusinessDetails(data, id): Observable<CreateMerchantBusiness>{
    return this.http.put<CreateMerchantBusiness>(
      this.baseurl + '/api/merchants/update-business-details/'+ id,
      JSON.stringify(data), 
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  UploadMerchantDoc(data:any){
    return this.http.post(
      this.baseurl + '/api/merchant-documents/verify',
      data,
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  // Add Merchant Bank Account 
  AddMerchantBankAccount(data:any, id:any,isAdmin:boolean): Observable<AddMerchantBank>{
    return this.http.put<AddMerchantBank>(
      this.baseurl + '/api/merchants/add-bank-account/'+ id + '?isAdmin='+isAdmin, 
      JSON.stringify(data),
      this.httpOptions)
     .pipe(retry(1), catchError(this.errorHandl))
  }
  // get verified merchant
  GetVerifiedMerchant(id){
    return this.http
    .get(
      this.baseurl + '/api/merchants/' + id,
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  //PRODUCT
  CreateProduct(data): Observable<CreateProduct> {
    return this.http
      .post<CreateProduct>(
        this.baseurl + '/api/products',
        data,
        this.httpsOptionsForm
      ) 
      .pipe(retry(1), catchError(this.errorHandl)); 
  }
  UpdateProductContentandImages(data): Observable<CreateProduct>{
    return this.http
      .post<CreateProduct>(
        this.baseurl + '/api/products/update',
        data,
        this.httpsOptionsForm
      ) 
      .pipe(retry(1), catchError(this.errorHandl)); 
  }
  UpdateOnlyProductContent(data, id){
    return this.http
      .put(
        this.baseurl + '/api/products/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl))
  }
  // get conversions by merchant
  GetConversionsByMerchant(id){
    return this.http
      .get(
        this.baseurl + '/api/conversions/merchant/' + id,
        this.httpOptions
      ).pipe(retry(1), catchError(this.errorHandl))
  }
  // =================================================
  // Product Calls
  // ==========================================
  // Approve Product
  ApproveProduct(id){
    return this.http.get(
      this.baseurl + '/api/products/approve/' + id,
      this.httpOptions
    ).pipe(retry(1),catchError(this.errorHandl))
  }
  // Get all products
  GetAllProduct(id:any){
    return this.http
    .get(this.baseurl + '/api/products/merchant/' +id,this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl))
  }
  GetAllProducts(){
    return this.http
    .get(
      this.baseurl + '/api/products',this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl))
  }
   GetAllCampaignProducts(id:any){
    return this.http
    .get(
      this.baseurl + '/api/affiliate-campaigns/merchant/'+id,this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl))
  }
  GetAllVerifiedProducts(){
    return this.http
    .get(
      this.baseurl + '/api/products/approved',this.httpOptions
    ).pipe(retry(1),catchError(this.errorHandl))
  }
  GetAnyProduct(id: any){
    // this is to get both verified and not verified products
    return this.http.get(
      this.baseurl + '/api/products/any/' + id,this.httpOptions
    ).pipe(retry(1),catchError(this.errorHandl))
  }
  GetAllListedProducts(){
    return this.http.get(
      this.baseurl + '/api/products/listed',this.httpOptions
    ).pipe(retry(1),catchError(this.errorHandl))
  }
  GetSingleProduct(id: any){
    return this.http
    .get(this.baseurl + '/api/products/'+id ,this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl))
  }
  GetProductImages(id:any){
    return this.http
    .get(
      this.baseurl
      +'/api/product-images/approved/product/'+id ,
      this.httpOptions
    ).pipe(retry(1),catchError(this.errorHandl))
  }
  EditSingleProduct(id:any, data: any): Observable<EditProduct>{
    return this.http
      .put<EditProduct>(
        this.baseurl + '/api/products/' + id,
        JSON.stringify(data),
        this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  // add product to market place
  AddToMarketPlace(id: any){
    this.getToken()
    return this.http
    .get(
      this.baseurl+'/api/products/add-marketplace/'+id,
      this.httpOptions
    ).pipe(retry(1),catchError(this.errorHandl))
  }
  // remove from MarketPlace
  RemoveFromMarket(id:any){
    return this.http
    .get(
      this.baseurl + '/api/products/remove-marketplace/'+ id,
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  // Get Products in MarketPlace
  GetMarketPlaceProduct(){
    return this.http
    .get(
      this.baseurl + '/api/products/listed/',
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl));
  }
  // =====================================================
  // Manipulating the Product Image (Redundant)
  // =====================================================
  // Upload the Product Image
  upLoadProductImage(data:any){
    return this.http
    .post(
      this.baseurl+'/api/product-images',
      data,
      this.httpsOptionsForm)
    .pipe(retry(1), catchError(this.errorHandl))
  }
  UpdateProductDetails(id,data): Observable<Product> {
    data.id = id;
    return this.http
      .put<Product>(
        this.baseurl + '/api/merchants',
        JSON.stringify(data),
        this.httpOptions
      ) 
      .pipe(retry(1), catchError(this.errorHandl));     
  }
  // delete product Image
  DeleteProductImage(data: number){
    return this.http.delete(
      this.baseurl + '/api/product-images/' + data,
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  AddProductCampaign(data: any): Observable<AddCampaign>{
    return this.http
    .post<AddCampaign>(
      this.baseurl + '/api/affiliate-campaigns/message',
      JSON.stringify(data),
      this.httpOptions
    ).pipe(retry(1),catchError(this.errorHandl))
  }
  // =========================================================
  //PRODUCT CONTENT
  // =========================================================
  CreateProductContent(data): Observable<ProductContent> {
    return this.http
      .post<ProductContent>(
        this.baseurl + '/api/product-contents',
        JSON.stringify(data),
        this.httpOptions
      ) 
      .pipe(retry(1), catchError(this.errorHandl)); 
  }
  GetUnapprovedProducts(){
    return this.http
      .get(
        this.baseurl + '/api/products/unapproved',
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  LoadProductContent(): Observable<ProductContent> {
    return this.http
      .get<ProductContent>(this.baseurl + '/api/products/product-contents',this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  GetProductContentById(id): Observable<ProductContent> {
    return this.http
      .get<ProductContent>(this.baseurl + '/api/product-contents/approved/' + id,
      this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  UpdateProductContentDetails(id,data): Observable<ProductContent> {
    data.id = id;
    return this.http
      .put<ProductContent>(
        this.baseurl + '/api/product-contents',
        JSON.stringify(data),
        this.httpOptions
      ) 
      .pipe(retry(1), catchError(this.errorHandl));     
  }
  // ============================================
  //BANK
  // ============================================
  CreateBank(data): Observable<CreateBank> {
    return this.http
      .post<CreateBank>(
       'https://api.paystack.co/subaccount',
        JSON.stringify(data),
        this.httpOptionsPaystack
      ) 
      .pipe(retry(1), catchError(this.errorHandl)); 
  }
  GetBankCode(){
    return this.http.get(
      this.baseurl+ '/api/supported-bank-accounts', this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
// =========================================================
// =========================================================
  //AFFILIATE
  AdminCreateAffiliate(data): Observable<createAffiliate>{
    return this.http
      .post<createAffiliate>(
        this.baseurl + '/api/affiliates/create',
        JSON.stringify(data),
        this.httpOptions
      ).pipe(retry(1), catchError(this.errorHandl))
  }
  GetAllAffiliates(){
    return this.http.get(
      this.baseurl + '/api/affiliates/all',
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  RegisterAffiliate(data): Observable<createAffiliate> {
    return this.http
      .post<Affiliates>(
        this.baseurl + '/api/affiliates/register',
        JSON.stringify(data),
        this.httpOptionsLogin
      ) 
      .pipe(retry(1), catchError(this.errorHandl)); 
  }

  UpdateAffiliateDetails(data): Observable<createAffiliate> {
    return this.http
      .put<createAffiliate>(
        this.baseurl + '/api/affiliate',
        JSON.stringify(data),
        this.httpOptions
      ) 
      .pipe(retry(1), catchError(this.errorHandl));     
  }
  
  UpdateAffiliateBusiness(id,data): Observable<CreateAffiliateBusiness> {
    return this.http
      .put<CreateAffiliateBusiness>(
        this.baseurl + '/api/affiliates/add-business-details/'+ id,
        JSON.stringify(data),
        this.httpOptions
      ) 
      .pipe(retry(1), catchError(this.errorHandl));     
  }


  EditAffiliateBusiness(data, id): Observable<CreateAffiliateBusiness>{
    return this.http.put<CreateAffiliateBusiness>(
      this.baseurl + '/api/affiliates/update-business-details/'+ id,
      JSON.stringify(data),
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }

  UpdateAffiliateAccount(data,id): Observable<UpdateBank> {
    return this.http
      .put<UpdateBank>(
        this.baseurl + '/api/affiliates/update-bank-account/'+ id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }





  UploadAffiliateDoc(data:any){
    return this.http.post(
      this.baseurl + '/api/affiliate-documents/verify',
      data,
      this.httpsOptionsForm
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  AddAffiliateBankAccount(data:any, id: any):Observable<AddAffiliateBank>{
    return this.http.put<AddAffiliateBank>(
      this.baseurl + '/api/affiliates/add-bank-account/'+ id,
      JSON.stringify(data),
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  LoadAffiliate(): Observable<Affiliates> {
    return this.http
      .get<Affiliates>(this.baseurl + '/api/affiliates',this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  GetAffiliateById(id): Observable<Affiliates> {
    return this.http
      .get<Affiliates>(this.baseurl + '/api/affiliates/' + id,
      this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  GetAllAffliateCampaigns(id:any){
    return this.http.get(
      this.baseurl + '/api/affiliate-campaigns/'+ id, this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))
  }
  GetAllConversionsByAffiliate(id:any){
    return this.http.get(
      this.baseurl + '/api/conversions/affiliate/' + id,
      this.httpOptions
    ).pipe(retry(1), catchError(this.errorHandl))

  }
  // Error handling
  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `${error['error'].errorMessage}`;
    }
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error !',
      text: errorMessage,
      showConfirmButton: false,
      timer: 3000
    })
    // this.notification.alertError(errorMessage)
    // this.notification.alertError('Error')
    return throwError(() => {
      return errorMessage;
    });
  }
  // =====================================================================
  // Admin only Calls
  // ======================================================================
  GetProductConversion(){
    return this.http
     .get<any>(
      this.baseurl + '/api/products/conversion', this.httpOptions
      ).pipe(retry(1), catchError(this.errorHandl))
  }
  GetAllCampaigns(){
    return this.http
     .get<any>(
      this.baseurl + '/api/affiliate-campaigns', this.httpOptions
     ).pipe(retry(1), catchError(this.errorHandl))
  }
}
