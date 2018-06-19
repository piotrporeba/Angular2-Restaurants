import {Component} from '@angular/core';
import {Film, FilmService} from "../film-service/film-service";
import {ReviewTrackerService} from "../review-tracker-service/review-tracker-service";
//import {MenuBarComponent} from "../menubar/menubar.component"

@Component({
    moduleId:     module.id,
    selector:    'filmGrid',
    templateUrl: 'rest-selection.component.html',
    styles:   ['div { background-color: #C63D0F; }'],
    providers:   [
        FilmService,
        {
            provide: ReviewTrackerService,
            useFactory:(verbose: boolean) => new ReviewTrackerService(verbose),
            deps: ["IS_VERBOSE_LOGGER"]
        }

    ]
})
export default class RestSelectionComponent {

    films: Array<Film> = [];

    constructor(filmService: FilmService){

        this.films=filmService.getFilmsBySelection("", "", "",4); // Use capital first letters like: ("Dublin", "", "Pub",3)
        //this.films = filmService.getFilms();
       // this.films = MenuBarComponent
    }

    getFilmsBySearch(){
        console.log("search thing wokrs");
        //this.films=filmService.getFilmsBySelection("Dublin", "Malahide", "",3);
    }


}

