import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import ApplicationComponent from './application/application.component'
import MenuBarComponent from "./menubar/menubar.component";
import FooterComponent from "./footer/footer.component";
import FilmItemComponent from "./film-item/film-item.component";
import ScoreComponent from "./score/score.component";
import {FormsModule} from "@angular/forms";
import ReviewComponent from "./review/review.component";
import {RouterModule} from '@angular/router';
import RestSelectionComponent from "./rest-selection/rest-selection.component";
import AboutComponent from "./about/about.component";
import ContactComponent from "./contact/contact.component";
import PageNotFoundComponent from "./pagenotfound/pagenotfound.component";
import ServiceComponent from "./service/service.component";
import FilmDetailComponent from "./film-detail/film-detail.component";


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '',        component: RestSelectionComponent },
            { path: 'film/:id', component: FilmDetailComponent, data: {displayPrice: true} },
            { path: 'about',   component: AboutComponent },
            { path: 'services',component: ServiceComponent },
            { path: 'contact', component: ContactComponent },
            { path: '**',      component: PageNotFoundComponent }
        ])
    ],
    declarations: [
        ApplicationComponent,
        MenuBarComponent,
        FooterComponent,
        FilmItemComponent,
        ScoreComponent,
        ReviewComponent,
        RestSelectionComponent,
        AboutComponent,
        ServiceComponent,
        ContactComponent,
        PageNotFoundComponent,
        FilmDetailComponent
    ],
    providers: [{provide: "IS_VERBOSE_LOGGER", useValue: false}],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}


