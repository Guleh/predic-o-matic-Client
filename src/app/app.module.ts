import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './content/main/main.component';
import { AssetComponent } from './content/main/asset/asset.component';
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './content/footer/footer.component';
import { SearchComponent } from './content/main/search/search.component';
import { TermsComponent } from './content/terms/terms.component';
import { PrivacyComponent } from './content/privacy/privacy.component';
import { CookiepolicyComponent } from './content/cookiepolicy/cookiepolicy.component';
import { DetailsComponent } from './content/main/asset/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './content/main/asset/chart/chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AssetComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    TermsComponent,
    PrivacyComponent,
    CookiepolicyComponent,
    DetailsComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
