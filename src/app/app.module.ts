import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from "@angular/core";
import { BrowserModule }                              from "@angular/platform-browser";
import { BrowserAnimationsModule }                    from "@angular/platform-browser/animations";
import { FormsModule }                                from "@angular/forms";
import { registerLocaleData }                         from "@angular/common";
import localePt                                       from "@angular/common/locales/pt";

import { NgxMaskModule, IConfig } from "ngx-mask";

import { AppRoutingModule }  from "./app-routing.module";
import { MaterialModule }    from "./material/material.module";
import { AppComponent }      from "./app.component";
import { HeaderComponent }   from "./header/header.component";
import { HeadComponent }     from "./header/head/head.component";
import { NavComponent }      from "./header/nav/nav.component";
import { HomeComponent }     from "./home/home.component";
import { SimpleComponent }   from "./simple/simple.component";
import { CompoundComponent } from "./compound/compound.component";
import { InterestComponent } from "./shared/interest/interest.component";

registerLocaleData(localePt, "pt");

const maskConfig: Partial<IConfig> = {
  validation: false
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadComponent,
    NavComponent,
    HomeComponent,
    SimpleComponent,
    CompoundComponent,
    InterestComponent
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    AppRoutingModule,
    MaterialModule
  ],
  providers:    [
    { provide: LOCALE_ID, useValue: "pt" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: "BRL" }
  ],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
