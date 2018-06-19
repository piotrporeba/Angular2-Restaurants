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
var router_1 = require("@angular/router");
var film_service_1 = require("../film-service/film-service");
var review_tracker_service_1 = require("../review-tracker-service/review-tracker-service");
var FilmDetailComponent = /** @class */ (function () {
    function FilmDetailComponent(filmService, route) {
        this.filmService = filmService;
        this.route = route;
    }
    FilmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriberParams = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.film = _this.filmService.getFilmById(id);
            // this.review = this.filmService.getFilmById(id).title;
        });
        this.subscriberData = this.route.data.subscribe(function (data) {
            _this.displayPrice = data['displayPrice'];
        });
        this.imageUrl = "/images/" + this.film.id + ".jpg";
        this.imageMapUrl = "/images/" + this.film.id + "map.png";
        this.imageMenuUrl = "/images/" + this.film.id + "menu.jpg";
    };
    FilmDetailComponent.prototype.ngOnDestroy = function () {
        this.subscriberParams.unsubscribe();
        this.subscriberData.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", film_service_1.Film)
    ], FilmDetailComponent.prototype, "film", void 0);
    FilmDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filmDetail',
            templateUrl: 'film-detail.component.html',
            styleUrls: ['film-detail.component.css'],
            providers: [
                film_service_1.FilmService,
                {
                    provide: review_tracker_service_1.ReviewTrackerService,
                    useFactory: function (verbose) { return new review_tracker_service_1.ReviewTrackerService(verbose); },
                    deps: ["IS_VERBOSE_LOGGER"]
                }
            ]
        }),
        __metadata("design:paramtypes", [film_service_1.FilmService, router_1.ActivatedRoute])
    ], FilmDetailComponent);
    return FilmDetailComponent;
}());
exports.default = FilmDetailComponent;
//# sourceMappingURL=film-detail.component.js.map