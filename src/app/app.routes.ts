import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { GranDiaComponent } from './gran-dia/gran-dia.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '#nuestra-historia', component: HistoriaComponent },
    { path: 'el-gran-dia', component: GranDiaComponent },
    //{ path: 'mesa-de-regalos', component: RegalosComponent },
    //{ path: 'galeria', component: GaleriaComponent },
];
