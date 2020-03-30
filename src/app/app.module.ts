import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './login/login.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { HeadresComponent } from './headres/headres.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{HomeRoutingModule} from './home/home-routing.module';
import { SettingComponent } from './setting/setting.component';
// import { ViewUserComponent } from './user-managment/view-user/view-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { ChangePasswordComponent } from './change-password/change-password.component';
import{AuthGaurdGuard} from './shared/services/auth-gaurd.guard'
export function CreateTranslateLoader(http: HttpClient) {
  console.log("translator orkking")
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    HeadresComponent,
    DashboardComponent,
    SettingComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    // BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot() // ToastrModule added
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'top-right',
      preventDuplicates: true,
 
    }),
  ],
  providers: [
    AuthGaurdGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
