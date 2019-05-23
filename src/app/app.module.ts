import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeService} from '../service/home.service';
import {ReaxiumPageComponent} from './reaxiumPage/reaxiumPage.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'reaxiumPage', component: ReaxiumPageComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ReaxiumPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot()
    ],
    providers: [HomeService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
