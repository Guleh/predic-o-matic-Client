import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiepolicyComponent } from './content/cookiepolicy/cookiepolicy.component';
import { MainComponent } from './content/main/main.component';
import { PrivacyComponent } from './content/privacy/privacy.component';
import { TermsComponent } from './content/terms/terms.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'cookies', component: CookiepolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
