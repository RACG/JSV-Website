import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BfdComponent } from './bfd/bfd.component';
import { DatenschutzerklarungComponent } from './datenschutzerklarung/datenschutzerklarung.component';
import { AppRoutingModule } from './/app-routing.module';
import { ImpressumComponent } from './impressum/impressum.component';
import { HomeComponent } from './home/home.component';
import { UberunsSectionComponent } from './uberuns/uberuns-section/uberuns-section.component';
import { UberunsPageComponent } from './uberuns/uberuns-page/uberuns-page.component';
import { MapComponent } from './map/map.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FortbildungComponent } from './fortbildung/fortbildung.component';
import { SexuelleGewaltComponent } from './fortbildung/sexuelle-gewalt/sexuelle-gewalt.component';
import { FachtageUndFachveranstaltungenComponent } from './fortbildung/fachtage-und-fachveranstaltungen/fachtage-und-fachveranstaltungen.component';
import { KooperationenComponent } from './kooperationen/kooperationen.component';
import { KooperationAnneFrankSchuleComponent } from './kooperationen/kooperation-anne-frank-schule/kooperation-anne-frank-schule.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { TatigkeitsfelderSectionComponent } from './tatigkeitsfelder/tatigkeitsfelder-section/tatigkeitsfelder-section.component';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { ElementComponent } from './tatigkeitsfelder/element/element.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BfdComponent,
    DatenschutzerklarungComponent,
    ImpressumComponent,
    HomeComponent,
    UberunsSectionComponent,
    UberunsPageComponent,
    MapComponent,
    KontaktComponent,
    FortbildungComponent,
    SexuelleGewaltComponent,
    FachtageUndFachveranstaltungenComponent,
    KooperationenComponent,
    KooperationAnneFrankSchuleComponent,
    AktuellesComponent,
    TatigkeitsfelderSectionComponent,
    NotificationBarComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
