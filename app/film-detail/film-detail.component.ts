import {Component, OnInit, Input,  OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmService, Film} from '../film-service/film-service';
import {ReviewTrackerService} from "../review-tracker-service/review-tracker-service";

@Component({
    moduleId: module.id,
    selector: 'filmDetail',
    templateUrl: 'film-detail.component.html',
    styleUrls: ['film-detail.component.css'],
    providers: [
        FilmService,
        {
            provide: ReviewTrackerService,
            useFactory:(verbose: boolean) => new ReviewTrackerService(verbose),
            deps: ["IS_VERBOSE_LOGGER"]
        }
    ]
})
export default class FilmDetailComponent implements OnInit, OnDestroy {
    @Input() film: Film;
    //film: Film;
    displayPrice: boolean;
    imageUrl: string;
    imageMapUrl: string;
    imageMenuUrl: string;
    //review: string;
    

    subscriberParams: any;
    subscriberData: any;

    constructor(private filmService: FilmService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.subscriberParams = this.route.params.subscribe(params => {
            let id: number = +params['id'];   // (+) converts string 'id' to a number
            this.film = this.filmService.getFilmById(id);
           // this.review = this.filmService.getFilmById(id).title;
           
        });

        this.subscriberData = this.route.data.subscribe(data => {
        this.displayPrice = data['displayPrice'];
        });

        this.imageUrl = `/images/${this.film.id}.jpg`;
        this.imageMapUrl = `/images/${this.film.id}map.png`;
        this.imageMenuUrl= `/images/${this.film.id}menu.jpg`;
     
    }

    ngOnDestroy() {
        this.subscriberParams.unsubscribe();
        this.subscriberData.unsubscribe();
    }
}
