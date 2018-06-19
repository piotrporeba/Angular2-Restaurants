"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var film_service_1 = require("../film-service/film-service");
var review_tracker_service_1 = require("../review-tracker-service/review-tracker-service");
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(reviewTrackerService) {
        this.reviewTrackerService = reviewTrackerService;
        this.showNumOfReviews = false;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.num = this.film.reviews.length;
        if (this.num > 0) {
            this.showNumOfReviews = true;
        }
    };
    ReviewComponent.prototype.addReview = function (review) {
        this.film.reviews.push(review);
        this.num = this.film.reviews.length;
        this.reviewTrackerService.reviewFilm(this.film.id, "Reviews for " + this.film.title + ": " + this.film.reviews.toString());
        this.updateReview();
    };
    ReviewComponent.prototype.updateReview = function () {
        if (this.num > 0) {
            this.showNumOfReviews = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", film_service_1.Film)
    ], ReviewComponent.prototype, "film", void 0);
    ReviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'review',
            templateUrl: 'review.component.html',
            styleUrls: ['review.component.css'],
        }),
        __metadata("design:paramtypes", [review_tracker_service_1.ReviewTrackerService])
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.default = ReviewComponent;
//# sourceMappingURL=review.component.js.map