"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var application_component_1 = require("./application/application.component");
var menubar_component_1 = require("./menubar/menubar.component");
var footer_component_1 = require("./footer/footer.component");
var film_item_component_1 = require("./film-item/film-item.component");
var score_component_1 = require("./score/score.component");
var forms_1 = require("@angular/forms");
var review_component_1 = require("./review/review.component");
var router_1 = require("@angular/router");
var rest_selection_component_1 = require("./rest-selection/rest-selection.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var pagenotfound_component_1 = require("./pagenotfound/pagenotfound.component");
var service_component_1 = require("./service/service.component");
var film_detail_component_1 = require("./film-detail/film-detail.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: rest_selection_component_1.default },
                    { path: 'film/:id', component: film_detail_component_1.default, data: { displayPrice: true } },
                    { path: 'about', component: about_component_1.default },
                    { path: 'services', component: service_component_1.default },
                    { path: 'contact', component: contact_component_1.default },
                    { path: '**', component: pagenotfound_component_1.default }
                ])
            ],
            declarations: [
                application_component_1.default,
                menubar_component_1.default,
                footer_component_1.default,
                film_item_component_1.default,
                score_component_1.default,
                review_component_1.default,
                rest_selection_component_1.default,
                about_component_1.default,
                service_component_1.default,
                contact_component_1.default,
                pagenotfound_component_1.default,
                film_detail_component_1.default
            ],
            providers: [{ provide: "IS_VERBOSE_LOGGER", useValue: false }],
            bootstrap: [application_component_1.default]
        })
    ], AppModule);
    return AppModule;
}());
exports.default = AppModule;
//# sourceMappingURL=module.js.map