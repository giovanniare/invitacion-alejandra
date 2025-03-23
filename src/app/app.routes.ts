import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { GranDiaComponent } from './gran-dia/gran-dia.component';
import { MesaRegalosComponent } from './mesa-regalos/mesa-regalos.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nuestra-historia', component: HistoriaComponent },
    { path: 'el-gran-dia', component: GranDiaComponent },
    { path: 'mesa-de-regalos', component: MesaRegalosComponent },
    { path: 'galeria', component: GaleriaComponent },
];
