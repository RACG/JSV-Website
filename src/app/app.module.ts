import { BrowserModule }                              from '@angular/platform-browser';
import { NgModule }                                   from '@angular/core';

import { AppComponent }                               from './app.component';
import { HeaderComponent }                            from './component/header/header.component';
import { FooterComponent }                            from './component/footer/footer.component';
import { BfdComponent }                               from './component/bfd/bfd.component';
import { DatenschutzerklarungComponent }              from './component/datenschutzerklarung/datenschutzerklarung.component';
import { AppRoutingModule }                           from './/app-routing.module';
import { ImpressumComponent }                         from './component/impressum/impressum.component';
import { HomeComponent }                              from './component/home/home.component';
import { UberunsSectionComponent }                    from './component/uberuns/uberuns-section/uberuns-section.component';
import { UberunsPageComponent }                       from './component/uberuns/uberuns-page/uberuns-page.component';
import { MapComponent }                               from './component/map/map.component';
import { KontaktComponent }                           from './component/kontakt/kontakt.component';
import { FortbildungComponent }                       from './component/fortbildung/fortbildung.component';
import { SexuelleGewaltComponent }                    from './component/fortbildung/sexuelle-gewalt/sexuelle-gewalt.component';
import { FachtageUndFachveranstaltungenComponent }    from './component/fortbildung/fachtage-und-fachveranstaltungen/fachtage-und-fachveranstaltungen.component';
import { KooperationenComponent }                     from './component/kooperationen/kooperationen.component';
import { KooperationAnneFrankSchuleComponent }        from './component/kooperationen/kooperation-anne-frank-schule/kooperation-anne-frank-schule.component';
import { AktuellesComponent }                         from './component/aktuelles/aktuelles.component';
import { TatigkeitsfelderSectionComponent }           from './component/tatigkeitsfelder/tatigkeitsfelder-section/tatigkeitsfelder-section.component';
import { NotificationBarComponent }                   from './component/notification-bar/notification-bar.component';
import { ActivityComponent }                           from './component/activity/activity.component';
import { ActivityService }                            from './service/activity/activity.service';

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
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
