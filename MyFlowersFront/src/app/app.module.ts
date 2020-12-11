import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassicComponent } from './classic/classic.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { OriginalComponent } from './original/original.component';
import { BasketBoxComponent } from './basket-box/basket-box.component';
import { HatBoxComponent } from './hat-box/hat-box.component';
import { BoxComponent } from './box/box.component';
import { GlassComponent } from './glass/glass.component';
import { BasketComponent } from './basket/basket.component';
import { BouquetsComponent } from './bouquets/bouquets.component';
import { MainComponent } from './main/main.component';
import { TypesComponent } from './types/types.component';
import { OrderComponent } from './order/order.component';
import { CountriesComponent } from './countries/countries.component';

import { HttpClientModule } from '@angular/common/http';
import { BouqService } from './shared/bouq.service';
import { HttpService } from './shared/http.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ColombiaComponent } from './colombia/colombia.component';
import { RussiaComponent } from './russia/russia.component';
import { KenyaComponent } from './kenya/kenya.component';
import { EcuadorComponent } from './ecuador/ecuador.component';
import { AllComponent } from './all/all.component';

const routes = [
  {path: '', component: MainComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'types', component: TypesComponent},
  {path: 'order', component: OrderComponent},
  {path: 'bouq', component: BouquetsComponent},
  {path: 'classic', component: ClassicComponent},
  {path: 'ribbon', component: RibbonComponent},
  {path: 'hatbox', component: HatBoxComponent},
  {path: 'basketbox', component: BasketBoxComponent},
  {path: 'glass', component: GlassComponent},
  {path: 'box', component: BoxComponent},
  {path: 'original', component: OriginalComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'ecuador', component: EcuadorComponent},
  {path: 'kenya', component: KenyaComponent},
  {path: 'colombia', component: ColombiaComponent},
  {path: 'russia', component: RussiaComponent},
  {path: 'all', component: AllComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ClassicComponent,
    RibbonComponent,
    OriginalComponent,
    BasketBoxComponent,
    HatBoxComponent,
    BoxComponent,
    GlassComponent,
    BasketComponent,
    BouquetsComponent,
    MainComponent,
    TypesComponent,
    OrderComponent,
    CountriesComponent,
    HeaderComponent,
    FooterComponent,
    ColombiaComponent,
    RussiaComponent,
    KenyaComponent,
    EcuadorComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [BouqService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }