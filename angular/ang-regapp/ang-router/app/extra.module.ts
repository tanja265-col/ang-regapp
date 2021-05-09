/*
Angular-sovelluksessa voi olla useita omia moduuleja. Tässä on extraModule joka
sisältää vain yhden komponentin. Toisiinsa liittyvät komponentit voidaan pakata
samaan moduuliin. Esim. maksumoduuli, laskentamoduuli. Komponentin reititys on sen
omassa moduulissa
*/
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExtraComponent} from './extra/extra';

@NgModule({
    imports:      [ CommonModule,
        RouterModule.forChild([
        {path: 'extra', component: ExtraComponent}
    ]) ],
    declarations: [ ExtraComponent ]
})

export class ExtraModule { }
