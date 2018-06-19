import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../film-service/film-service";
import {ReviewTrackerService} from "../review-tracker-service/review-tracker-service";

@Component({
    moduleId:     module.id,
    selector:    'review',
    templateUrl: 'review.component.html',
    styleUrls:  ['review.component.css'],

})
export default class ReviewComponent implements OnInit {
    @Input() film: Film;

    constructor(private reviewTrackerService : ReviewTrackerService) {}

    showNumOfReviews:Boolean = false;
    num: number;
    ngOnInit() {
        this.num = this.film.reviews.length;
        if(this.num>0){
            this.showNumOfReviews=true;
        }
    }


    addReview(review: string): void{

        this.film.reviews.push(review);

        this.num = this.film.reviews.length;
        this.reviewTrackerService.reviewFilm(this.film.id, `Reviews for ${this.film.title}: ${this.film.reviews.toString()}`);
        this.updateReview();
    }
    updateReview(){
        if(this.num>0){
            this.showNumOfReviews=true;

        }
    }

}