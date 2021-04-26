// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {RootComponent} from './index.component';
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AngularPageVisibilityModule} from 'angular-page-visibility';
import {ChromeModule} from '@kubernetes/dashboard/src/app/frontend/chrome/module';
import {CoreModule} from '@kubernetes/dashboard/src/app/frontend/core.module';
import {GlobalErrorHandler} from '@kubernetes/dashboard/src/app/frontend/error/handler';
import {routes} from '@kubernetes/dashboard/src/app/frontend/index.routing';
import {LoginModule} from '@kubernetes/dashboard/src/app/frontend/login/module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { ElectronBaseUrlInterceptor } from "./interceptor/interceptor.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    ChromeModule,
    LoginModule,
    AngularPageVisibilityModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ElectronBaseUrlInterceptor,
      multi: true
    }
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class RootModule {}
