import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId:     module.id,
    selector:    'score',
    templateUrl: 'score.component.html',
    styleUrls:  ['score.component.css']
})

export default class ScoreComponent implements OnInit {
    @Input() score: number;

    public starsEmpty: Array<boolean> = [true, true, true, true, true];
    ngOnInit(){

        let num: number = Math.floor(this.score);
        for(let i in this.starsEmpty){
            if(num>0){
                this.starsEmpty[i]=false;
                num--;
            }else{
                this.starsEmpty[i]=true;
            }
        }
    }
}

