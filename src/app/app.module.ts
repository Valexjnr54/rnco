import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,  HTTP_INTERCEPTORS  } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { AffiliateComponent } from './onboarding/affiliate/affiliate.component';
import { MerchantComponent } from './onboarding/merchant/merchant.component';
import { PersonalComponent } from './onboarding/merchant/personal/personal.component';
import { BusinessComponent } from './modals/OnboardingModals/business/business.component';
import { LoginComponent } from './login/login.component';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { DashboardSidebarComponent } from './merchant-dashboard/Merchant_components/dashboard-sidebar/dashboard-sidebar.component';
import { ProductCardComponent } from './merchant-dashboard/Merchant_components/product-card/product-card.component';
import { DashboardComponent } from './merchant-dashboard/Merchant_pages/dashboard/dashboard.component';
import { ProductComponent } from './merchant-dashboard/Merchant_pages/product/product.component';
import { EditProductComponent } from './merchant-dashboard/Merchant_pages/edit-product/edit-product.component';
import { AddProductComponent } from './merchant-dashboard/Merchant_pages/add-product/add-product.component';
import { DashboardNavbarComponent } from './merchant-dashboard/Merchant_components/dashboard-navbar/dashboard-navbar.component';
import { ProductsComponent } from './merchant-dashboard/Merchant_pages/products/products.component';
import { EmailConfirmationComponent } from './modals/OnboardingModals/email-confirmation/email-confirmation.component';
import { MerchantWelcomeComponent } from './modals/OnboardingModals/merchant-welcome/merchant-welcome.component';
import { FewStepsComponent } from './modals/OnboardingModals/few-steps/few-steps.component';
import { UploadKYCComponent } from './modals/OnboardingModals/upload-kyc/upload-kyc.component';
import { AddBankAccountComponent } from './modals/OnboardingModals/add-bank-account/add-bank-account.component';
import { RegistrationPaymentComponent } from './modals/OnboardingModals/registration-payment/registration-payment.component';
import { OnboardCompleteComponent } from './modals/OnboardingModals/onboard-complete/onboard-complete.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { RegistratonCompleteComponent } from './modals/OnboardingModals/registraton-complete/registraton-complete.component';
import { ProfileComponent } from './merchant-dashboard/Merchant_pages/profile/profile.component';
import { EditProfileComponent } from './merchant-dashboard/Merchant_pages/edit-profile/edit-profile.component';
import { EditPersonalComponent } from './modals/EditProfileModals/edit-personal/edit-personal.component';
import { EditBusinessComponent } from './modals/EditProfileModals/edit-business/edit-business.component';
import { EditAccountComponent } from './modals/EditProfileModals/edit-account/edit-account.component';
import { AffPersonalComponent } from './onboarding/affiliate/aff-personal/aff-personal.component';
// affiliate components
import { AffiliateDashboardComponent } from './affiliate-dashboard/affiliate-dashboard.component';
import { AffDashboardNavbarComponent } from './affiliate-dashboard/affiliate-components/aff-dashboard-navbar/aff-dashboard-navbar.component';
import { AffDashboardSidebarComponent } from './affiliate-dashboard/affiliate-components/aff-dashboard-sidebar/aff-dashboard-sidebar.component';
import { AffDashboardComponent } from './affiliate-dashboard/affiliate-pages/aff-dashboard/aff-dashboard.component';
import { AffiliateCampaignComponent } from './affiliate-dashboard/affiliate-pages/affiliate-campaign/affiliate-campaign.component';
import { AffMarketPlaceComponent } from './affiliate-dashboard/affiliate-pages/aff-market-place/aff-market-place.component';
import { AffProductCardComponent } from './affiliate-dashboard/affiliate-components/aff-product-card/aff-product-card.component';
import { AffBusinessComponent } from './modals/OnboardingAffiliateModals/aff-business/aff-business.component';
import { AffiliateWelcomeComponent } from './modals/OnboardingAffiliateModals/affiliate-welcome/affiliate-welcome.component';
import { AffFewStepsComponent } from './modals/OnboardingAffiliateModals/aff-few-steps/aff-few-steps.component';
import { AffUploadKycComponent } from './modals/OnboardingAffiliateModals/aff-upload-kyc/aff-upload-kyc.component';
import { AffAddBankAccountComponent } from './modals/OnboardingAffiliateModals/aff-add-bank-account/aff-add-bank-account.component';
import { AffRegistrationPaymentComponent } from './modals/OnboardingAffiliateModals/aff-registration-payment/aff-registration-payment.component';
import { AffRegistratonCompleteComponent } from './modals/OnboardingAffiliateModals/aff-registraton-complete/aff-registraton-complete.component';
import { AffProductDetailComponent } from './affiliate-dashboard/affiliate-pages/aff-product-detail/aff-product-detail.component';
import { AffSettingsComponent } from './affiliate-dashboard/affiliate-pages/aff-settings/aff-settings.component';
import { AffProfileComponent } from './affiliate-dashboard/affiliate-pages/aff-profile/aff-profile.component';
import { AffEditProfileComponent } from './affiliate-dashboard/affiliate-pages/aff-edit-profile/aff-edit-profile.component';
import { AffReportsComponent } from './affiliate-dashboard/affiliate-pages/aff-reports/aff-reports.component';
import { AffChangePasswordComponent } from './affiliate-dashboard/affiliate-pages/aff-change-password/aff-change-password.component';
import { AffResetPasswordComponent } from './affiliate-dashboard/affiliate-pages/aff-reset-password/aff-reset-password.component';
import {StoreModule} from '@ngrx/store';
// import {StoreDevToolsModule} from '@ngrx/store-dev-tools';
import { AdminNavBarComponent } from './admin-dashboard/admin-components/admin-nav-bar/admin-nav-bar.component';
import { AdminSideBarComponent } from './admin-dashboard/admin-components/admin-side-bar/admin-side-bar.component';
import { AdDashboardComponent } from './admin-dashboard/admin-pages/ad-dashboard/ad-dashboard.component';
import { AdMerchantComponent } from './admin-dashboard/admin-pages/ad-merchant/ad-merchant.component';
import { AdMerchantsComponent } from './admin-dashboard/admin-pages/ad-merchants/ad-merchants.component';
import { AdMerchantOnboardComponent } from './admin-dashboard/admin-pages/ad-merchant-onboard/ad-merchant-onboard.component';
import { AdPersonalComponent } from './admin-dashboard/admin-pages/ad-merchant-onboard/ad-merchant-modals/ad-personal/ad-personal.component';
import { AdBusinessComponent } from './admin-dashboard/admin-pages/ad-merchant-onboard/ad-merchant-modals/ad-business/ad-business.component';
import { AdUploadKycComponent } from './admin-dashboard/admin-pages/ad-merchant-onboard/ad-merchant-modals/ad-upload-kyc/ad-upload-kyc.component';
import { AdBankDetailsComponent } from './admin-dashboard/admin-pages/ad-merchant-onboard/ad-merchant-modals/ad-bank-details/ad-bank-details.component';
import { AdRegistrationPaymentComponent } from './admin-dashboard/admin-pages/ad-merchant-onboard/ad-merchant-modals/ad-registration-payment/ad-registration-payment.component';
import { AdRegistrationCompleteComponent } from './admin-dashboard/admin-pages/ad-merchant-onboard/ad-merchant-modals/ad-registration-complete/ad-registration-complete.component';
import { AdminAffiliatesComponent } from './admin-dashboard/admin-pages/admin-affiliates/admin-affiliates.component';
import { AdminAffiliateComponent } from './admin-dashboard/admin-pages/admin-affiliate/admin-affiliate.component';
import { AdAffiliateOnboardComponent } from './admin-dashboard/admin-pages/ad-affiliate-onboard/ad-affiliate-onboard.component';
import { AdminProductComponent } from './admin-dashboard/admin-pages/admin-product/admin-product.component';
import { AdminProductsComponent } from './admin-dashboard/admin-pages/admin-products/admin-products.component';
import { AdminEditProductComponent } from './admin-dashboard/admin-pages/admin-edit-product/admin-edit-product.component';
import { AdminAddProductComponent } from './admin-dashboard/admin-pages/admin-add-product/admin-add-product.component';
import { AdminProductCardComponent } from './admin-dashboard/admin-components/admin-product-card/admin-product-card.component';
import { AdminMarketplaceComponent } from './admin-dashboard/admin-pages/admin-marketplace/admin-marketplace.component';
import { AdminMarketplaceCardComponent } from './admin-dashboard/admin-components/admin-marketplace-card/admin-marketplace-card.component';
import { ProductCampaignComponent } from './admin-dashboard/admin-pages/product-campaign/product-campaign.component';
import { AdAffPersonalComponent } from './admin-dashboard/admin-pages/ad-affiliate-onboard/ad-affiliate-modals/ad-aff-personal/ad-aff-personal.component';
import { AdAffBusinessComponent } from './admin-dashboard/admin-pages/ad-affiliate-onboard/ad-affiliate-modals/ad-aff-business/ad-aff-business.component';
import { AdAffBankDetailsComponent } from './admin-dashboard/admin-pages/ad-affiliate-onboard/ad-affiliate-modals/ad-aff-bank-details/ad-aff-bank-details.component';
import { AdAffRegistrationPaymentComponent } from './admin-dashboard/admin-pages/ad-affiliate-onboard/ad-affiliate-modals/ad-aff-registration-payment/ad-aff-registration-payment.component';
import { AdAffUploadKycComponent } from './admin-dashboard/admin-pages/ad-affiliate-onboard/ad-affiliate-modals/ad-aff-upload-kyc/ad-aff-upload-kyc.component';
import { AdAffRegistrationCompleteComponent } from './admin-dashboard/admin-pages/ad-affiliate-onboard/ad-affiliate-modals/ad-aff-registration-complete/ad-aff-registration-complete.component';
import { ReportComponent } from './admin-dashboard/admin-pages/report/report.component';
import { ProductReportComponent } from './admin-dashboard/admin-pages/report/report_components/product-report/product-report.component';
import { MerchantReportsComponent } from './admin-dashboard/admin-pages/report/report_components/merchant-reports/merchant-reports.component';
import { AffiliateReportsComponent } from './admin-dashboard/admin-pages/report/report_components/affiliate-reports/affiliate-reports.component';
import { MarketplaceComponent } from './merchant-dashboard/Merchant_pages/marketplace/marketplace.component';
import { CampaignsComponent } from './merchant-dashboard/Merchant_pages/campaigns/campaigns.component';
import { SettingsComponent } from './merchant-dashboard/Merchant_pages/settings/settings.component';
import { ReportsComponent } from './merchant-dashboard/Merchant_pages/reports/reports.component';
import { ChangePasswordComponent } from './merchant-dashboard/Merchant_pages/change-password/change-password.component';
import { ResetPasswordComponent } from './merchant-dashboard/Merchant_pages/reset-password/reset-password.component';
import { AdEditMerchantComponent } from './admin-dashboard/admin-pages/ad-edit-merchant/ad-edit-merchant.component';
import { AdEditAffiliateComponent } from './admin-dashboard/admin-pages/ad-edit-affiliate/ad-edit-affiliate.component';
import { AffTermsandConditionsComponent } from './affiliate-dashboard/affiliate-components/aff-termsand-conditions/aff-termsand-conditions.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { StepIndicatorComponent } from './modals/step-indicator/step-indicator.component';
import { LogoutComponent } from './modal/logout/logout.component';
import { EditMerchantPersonalComponent } from './modals/EditMerchant/edit-merchant-personal/edit-merchant-personal.component';
import { EditMerchantBankComponent } from './modals/EditMerchant/edit-merchant-bank/edit-merchant-bank.component';
import { EditMerchantBusinessComponent } from './modals/EditMerchant/edit-merchant-business/edit-merchant-business.component';
import { EditAffiliateBusinessComponent } from './modals/EditAffiliate/edit-affiliate-business/edit-affiliate-business.component';
import { EditAffiliatePersonalComponent } from './modals/EditAffiliate/edit-affiliate-personal/edit-affiliate-personal.component';
import { EditAffiliateBankComponent } from './modals/EditAffiliate/edit-affiliate-bank/edit-affiliate-bank.component';
import { AddProductsComponent } from './merchant-dashboard/Merchant_pages/add-products/add-products.component';
import { EditProductsComponent } from './merchant-dashboard/Merchant_pages/edit-products/edit-products.component';
import { LoginmodalService } from './loginmodal.service';
import { SideBarService } from './sidebar.service';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    Angular4PaystackModule.forRoot('pk_test_1ee15a4e46d24549c8ef8214974c0d5ac3de6e4b'),
    StoreModule.forRoot({})
  ],
  declarations: [
    AppComponent,
    
    HomepageComponent,
    OnboardingComponent,
    AffiliateComponent,
    MerchantComponent,
    PersonalComponent,
    BusinessComponent,
    LoginComponent,
    MerchantDashboardComponent,
    DashboardSidebarComponent,
    ProductCardComponent,
    DashboardComponent,
    ProductComponent,
    EditProductComponent,
    AddProductComponent,
    DashboardNavbarComponent,
    ProductsComponent,
    EmailConfirmationComponent,
    MerchantWelcomeComponent,
    FewStepsComponent,
    UploadKYCComponent,
    AddBankAccountComponent,
    RegistrationPaymentComponent,
    OnboardCompleteComponent,
    RegistratonCompleteComponent,
    ProfileComponent,
    EditProfileComponent,
    EditPersonalComponent,
    EditBusinessComponent,
    EditAccountComponent,
    AffPersonalComponent,
    AffiliateDashboardComponent,
    AffDashboardNavbarComponent,
    AffDashboardSidebarComponent,
    AffDashboardComponent,
    AffiliateCampaignComponent,
    AffMarketPlaceComponent,
    AffProductCardComponent,
    AffBusinessComponent,
    AffiliateWelcomeComponent,
    AffFewStepsComponent,
    AffUploadKycComponent,
    AffAddBankAccountComponent,
    AffRegistrationPaymentComponent,
    AffRegistratonCompleteComponent,
    AffProductDetailComponent,
    AffProfileComponent,
    AffSettingsComponent,
    AffEditProfileComponent,
    AffReportsComponent,
    AffResetPasswordComponent,
    AffChangePasswordComponent,
    AdminNavBarComponent,
    AdminSideBarComponent,
    AdDashboardComponent,
    AdMerchantComponent,
    AdMerchantsComponent,
    AdMerchantOnboardComponent,
    AdPersonalComponent,
    AdBusinessComponent,
    AdUploadKycComponent,
    AdBankDetailsComponent,
    AdRegistrationPaymentComponent,
    AdRegistrationCompleteComponent,
    AdminAffiliatesComponent,
    AdminAffiliateComponent,
    AdAffiliateOnboardComponent,
    AdminProductComponent,
    AdminProductsComponent,
    AdminEditProductComponent,
    AdminAddProductComponent,
    AdminProductCardComponent,
    AdminMarketplaceComponent,
    AdminMarketplaceCardComponent,
    ProductCampaignComponent,
    AdAffPersonalComponent,
    AdAffBusinessComponent,
    AdAffBankDetailsComponent,
    AdAffRegistrationPaymentComponent,
    AdAffUploadKycComponent,
    AdAffRegistrationCompleteComponent,
    ReportComponent,
    ProductReportComponent,
    MerchantReportsComponent,
    AffiliateReportsComponent,
    MarketplaceComponent,
    CampaignsComponent,
    SettingsComponent,
    ReportsComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    AdEditMerchantComponent,
    AdEditAffiliateComponent,
    AffTermsandConditionsComponent,
    SpinnerComponent,
    StepIndicatorComponent,
    LogoutComponent,
    EditMerchantPersonalComponent,
    EditMerchantBankComponent,
    EditMerchantBusinessComponent,
    EditAffiliateBusinessComponent,
    EditAffiliatePersonalComponent,
    EditAffiliateBankComponent,
    AddProductsComponent,
    EditProductsComponent,
  ],
  providers: [
    LoginmodalService,
    SideBarService,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
