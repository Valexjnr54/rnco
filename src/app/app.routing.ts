import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule, Title  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { AffiliateComponent } from './onboarding/affiliate/affiliate.component';
import { MerchantComponent } from './onboarding/merchant/merchant.component';
import { LoginComponent } from './login/login.component';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
// Merchant Dashboard Links
import { DashboardComponent } from './merchant-dashboard/Merchant_pages/dashboard/dashboard.component';
import { ProductComponent } from './merchant-dashboard/Merchant_pages/product/product.component';
import { ProductsComponent } from './merchant-dashboard/Merchant_pages/products/products.component';
import { AddProductComponent } from './merchant-dashboard/Merchant_pages/add-product/add-product.component';
import { EmailConfirmationComponent } from './modals/OnboardingModals/email-confirmation/email-confirmation.component';
import { EditProductComponent } from './merchant-dashboard/Merchant_pages/edit-product/edit-product.component';
import { ProfileComponent } from './merchant-dashboard/Merchant_pages/profile/profile.component';
import { EditProfileComponent } from './merchant-dashboard/Merchant_pages/edit-profile/edit-profile.component';
import { CampaignsComponent } from './merchant-dashboard/Merchant_pages/campaigns/campaigns.component';
import { MarketplaceComponent } from './merchant-dashboard/Merchant_pages/marketplace/marketplace.component';
import { ReportsComponent } from './merchant-dashboard/Merchant_pages/reports/reports.component';
import { SettingsComponent } from './merchant-dashboard/Merchant_pages/settings/settings.component';
import { ChangePasswordComponent } from './merchant-dashboard/Merchant_pages/change-password/change-password.component';
import { ResetPasswordComponent } from './merchant-dashboard/Merchant_pages/reset-password/reset-password.component';
// Affiliate Dashboard components
import { AffiliateDashboardComponent } from './affiliate-dashboard/affiliate-dashboard.component';
import { AffDashboardComponent } from './affiliate-dashboard/affiliate-pages/aff-dashboard/aff-dashboard.component';
import { AffiliateCampaignComponent } from './affiliate-dashboard/affiliate-pages/affiliate-campaign/affiliate-campaign.component';
import { AffMarketPlaceComponent } from './affiliate-dashboard/affiliate-pages/aff-market-place/aff-market-place.component';
import { AffProductDetailComponent } from './affiliate-dashboard/affiliate-pages/aff-product-detail/aff-product-detail.component';
import { AffProfileComponent } from './affiliate-dashboard/affiliate-pages/aff-profile/aff-profile.component';
import { AffSettingsComponent } from './affiliate-dashboard/affiliate-pages/aff-settings/aff-settings.component';
import { AffEditProfileComponent } from './affiliate-dashboard/affiliate-pages/aff-edit-profile/aff-edit-profile.component';
import { AffReportsComponent } from './affiliate-dashboard/affiliate-pages/aff-reports/aff-reports.component';
import { AffChangePasswordComponent } from './affiliate-dashboard/affiliate-pages/aff-change-password/aff-change-password.component';
import { AffResetPasswordComponent } from './affiliate-dashboard/affiliate-pages/aff-reset-password/aff-reset-password.component';
// Admin pages
import { AdDashboardComponent } from './admin-dashboard/admin-pages/ad-dashboard/ad-dashboard.component';
import { AdMerchantComponent } from './admin-dashboard/admin-pages/ad-merchant/ad-merchant.component';
import { AdMerchantsComponent} from './admin-dashboard/admin-pages/ad-merchants/ad-merchants.component';
import { AdMerchantOnboardComponent } from './admin-dashboard/admin-pages/ad-merchant-onboard/ad-merchant-onboard.component';
import { AdminAffiliateComponent } from './admin-dashboard/admin-pages/admin-affiliate/admin-affiliate.component';
import { AdminAffiliatesComponent } from './admin-dashboard/admin-pages/admin-affiliates/admin-affiliates.component';
import { AdAffiliateOnboardComponent } from './admin-dashboard/admin-pages/ad-affiliate-onboard/ad-affiliate-onboard.component';
import { AdminProductComponent } from './admin-dashboard/admin-pages/admin-product/admin-product.component';
import { AdminProductsComponent } from './admin-dashboard/admin-pages/admin-products/admin-products.component';
import { AdminAddProductComponent } from './admin-dashboard/admin-pages/admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from './admin-dashboard/admin-pages/admin-edit-product/admin-edit-product.component';
import { AdminMarketplaceComponent } from './admin-dashboard/admin-pages/admin-marketplace/admin-marketplace.component';
import { ProductCampaignComponent } from './admin-dashboard/admin-pages/product-campaign/product-campaign.component';
import { ReportComponent } from './admin-dashboard/admin-pages/report/report.component';
import { AdEditMerchantComponent } from './admin-dashboard/admin-pages/ad-edit-merchant/ad-edit-merchant.component';
import { AdEditAffiliateComponent } from './admin-dashboard/admin-pages/ad-edit-affiliate/ad-edit-affiliate.component';
import { LogoutComponent } from './modal/logout/logout.component';
import { AddProductsComponent } from './merchant-dashboard/Merchant_pages/add-products/add-products.component';
import { EditProductsComponent } from './merchant-dashboard/Merchant_pages/edit-products/edit-products.component';

const routes: Routes =[
    {
      path: 'home',
      component: HomepageComponent
    },
    {
      path: 'onboard',
      component: OnboardingComponent
    },
    // Onboarding Routing 
    {
      path: "affiliateOnboard",
      component: AffiliateComponent,
      title: "Affiliate Onboard",
      children:[]
    },
    {
      path: "merchantOnboard",
      component: MerchantComponent,
      title: "Merchant Onboard",
      children: []
    },
    // route from Email link
    {
      path: "rnco/api/account/activate",
      redirectTo: "/login?isNew=true"
    },
    // confirmation Email
    {
      path: "confirmEmail",
      component: EmailConfirmationComponent,
      title: "Confirm Email"
    },
    // Login page
    {
      path:'login',
      component: LoginComponent
    },
    {
      path:'logout',
      component: LogoutComponent
    },
    // Dashboards
    // Merchant Dashboard
    {
      path: 'merchant',
      component: MerchantDashboardComponent,
      title: "Merchant Dashboard",
      children: [
        // merchant dashboard Links
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          // view products
          path: 'products',
          component: ProductsComponent
        },
        {
          // single product view
          path: 'productDetail',
          component: ProductComponent,
        },
        {
          // this path is for editing products
          path: 'editProduct',
          component: EditProductsComponent,
        },
        {
          // this path is for adding products
          path: 'addProduct',
          component: AddProductsComponent,
        },
        {
          // path to user profile
          path: 'profile',
          component: ProfileComponent
        },
        {
          path: 'campaign',
          component: CampaignsComponent
        },
        {
          path: 'market',
          component: MarketplaceComponent
        },
        {
          path: 'report',
          component: ReportsComponent
        },
        {
          // to Edit Profile
          path: 'editProfile',
          component: EditProfileComponent
        },
        {
          path: 'settings',
          component: SettingsComponent
        },
        {
          path: 'changePassword',
          component: ChangePasswordComponent
        },
        {
          path: 'resetPassword',
          component: ResetPasswordComponent
        },
        // redirect broken links to merchant home
        { path: "**", redirectTo: "" },
        {path: "", redirectTo: "dashboard"}
      ]
    },
    // affiliate Dashboard
    {
      path: 'affiliate',
      component: AffiliateDashboardComponent,
      title: "Affiliate Dashboard",
      children: [
        { 
          path: 'affiliateDashboard',
          component: AffDashboardComponent
        },
        {
          path: 'affiliateCampaign',
          component: AffiliateCampaignComponent
        },
        {
          path: 'affiliateMarket',
          component: AffMarketPlaceComponent
        },
        {
          path: 'affiliateProduct',
          component: AffProductDetailComponent
        },
        {
          path: 'profile',
          component: AffProfileComponent
        },
        {
          path: 'editProfile',
          component: AffEditProfileComponent
        },
        {
          path: 'settings',
          component: AffSettingsComponent
        },
        {
          path: 'reports',
          component: AffReportsComponent
        },
        {
          path: 'changePassword',
          component: AffChangePasswordComponent
        },
        {
          path: 'resetPassword',
          component: AffResetPasswordComponent
        },
        {
          path: "", redirectTo: "affiliateDashboard"
        }
      ]
    },
    // Admin route protected
    {
      path: 'admin',
      children: [
        {
          path: 'dashboard',
          component: AdDashboardComponent,
        },
        {
          path: 'merchant',
          component: AdMerchantComponent,
        },
        {
          path: 'merchantOnboard',
          component: AdMerchantOnboardComponent,
        },
        {
          path: 'merchants',
          component: AdMerchantsComponent,
        },
        {
          path: 'editMerchant',
          component: AdEditMerchantComponent,
        },
        {
          path: 'editAffiliate',
          component: AdEditAffiliateComponent,
        },
        {
          path: 'affiliate',
          component: AdminAffiliateComponent
        },
        {
          path: 'affiliates',
          component: AdminAffiliatesComponent
        },
        {
          path: 'affiliateOnboard',
          component: AdAffiliateOnboardComponent
        },
        {
          path: 'products',
          component: AdminProductsComponent
        },
        {
          path: 'product',
          component: AdminProductComponent
        },
        {
          path: 'editProduct',
          component: AdminEditProductComponent,
        },
        {
          path: 'addProduct',
          component: AdminAddProductComponent
        },
        {
          path: 'market',
          component: AdminMarketplaceComponent
        },
        {
          path: 'productCampaign',
          component: ProductCampaignComponent
        },
        {
          path: 'report',
          component: ReportComponent
        }
      ]
    },
    // Handle activation link
    { path: "auth", redirectTo: "auth", pathMatch: "full" },
    { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
