import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../film-service/film-service";

@Component({
    moduleId:     module.id,
    selector:    'osl-film-item',
    templateUrl: 'film-item.component.html',
    styleUrls:  ['film-item.component.css']
})
export default class FilmItemComponent implements OnInit {
    @Input() film: Film;
    imageUrl: string;

    ngOnInit(){

        this.imageUrl = `/images/${this.film.id}.jpg`;
    }
}

