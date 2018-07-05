import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './component/home/home.component';
import { ImpressumComponent } from './component/impressum/impressum.component';
import { DatenschutzerklarungComponent } from './component/datenschutzerklarung/datenschutzerklarung.component';
import { BfdComponent } from './component/bfd/bfd.component';
import { UberunsPageComponent } from './component/uberuns/uberuns-page/uberuns-page.component';
import { FortbildungComponent } from './component/fortbildung/fortbildung.component';
import { SexuelleGewaltComponent } from './component/fortbildung/sexuelle-gewalt/sexuelle-gewalt.component';
import { FachtageUndFachveranstaltungenComponent } from './component/fortbildung/fachtage-und-fachveranstaltungen/fachtage-und-fachveranstaltungen.component';
import { KooperationenComponent } from './component/kooperationen/kooperationen.component';
import { KooperationAnneFrankSchuleComponent } from './component/kooperationen/kooperation-anne-frank-schule/kooperation-anne-frank-schule.component';
import { AktuellesComponent } from './component/aktuelles/aktuelles.component';


const routes: Routes = [
	{ path: 'home', redirectTo: '', pathMatch: 'full' },
	{ path: '', component: HomeComponent },
	{ path: 'uberuns', component: UberunsPageComponent },
	{ path: 'fortbildung', component: FortbildungComponent },
	{ path: 'sexuelle-gewalt', component: SexuelleGewaltComponent },
	{ path: 'fachtage-und-fachveranstaltungen', component: FachtageUndFachveranstaltungenComponent },
	{ path: 'bfd', component: BfdComponent },
	{ path: 'kooperationen', component: KooperationenComponent },
	{ path: 'kooperation-anne-frank-schule', component: KooperationAnneFrankSchuleComponent },
	{ path: 'aktuelles', component: AktuellesComponent },
	{ path: 'datenschutzerklarung', component: DatenschutzerklarungComponent },
	{ path: 'impressum', component: ImpressumComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }