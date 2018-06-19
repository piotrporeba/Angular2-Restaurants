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
//import {MenuBarComponent} from "../menubar/menubar.component"
var RestSelectionComponent = /** @class */ (function () {
    function RestSelectionComponent(filmService) {
        this.films = [];
        this.films = filmService.getFilmsBySelection("", "", "", 4); // Use capital first letters like: ("Dublin", "", "Pub",3)
        //this.films = filmService.getFilms();
        // this.films = MenuBarComponent
    }
    RestSelectionComponent.prototype.getFilmsBySearch = function () {
        console.log("search thing wokrs");
        //this.films=filmService.getFilmsBySelection("Dublin", "Malahide", "",3);
    };
    RestSelectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filmGrid',
            templateUrl: 'rest-selection.component.html',
            styles: ['div { background-color: #C63D0F; }'],
            providers: [
                film_service_1.FilmService,
                {
                    provide: review_tracker_service_1.ReviewTrackerService,
                    useFactory: function (verbose) { return new review_tracker_service_1.ReviewTrackerService(verbose); },
                    deps: ["IS_VERBOSE_LOGGER"]
                }
            ]
        }),
        __metadata("design:paramtypes", [film_service_1.FilmService])
    ], RestSelectionComponent);
    return RestSelectionComponent;
}());
exports.default = RestSelectionComponent;
//# sourceMappingURL=rest-selection.component.js.map