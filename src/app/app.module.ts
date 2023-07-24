import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FormComponent } from './components/form/form.component';
import { SecMenuComponent } from './components/sec-menu/sec-menu.component';
import { TimeframesNavComponent } from './components/timeframes-nav/timeframes-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CardComponent,
    CardListComponent,
    FormComponent,
    SecMenuComponent,
    TimeframesNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
