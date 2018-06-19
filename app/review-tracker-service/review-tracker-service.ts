import {Injectable} from '@angular/core';

@Injectable()
export class ReviewTrackerService {
    verbose: boolean;

    constructor(verbose: boolean) {
        this.verbose = verbose;
    }

    reviewFilm(filmId:number, comment: string): void{
        let msg: string;

        if(this.verbose){
            msg = `[Film ${filmId}] ${comment}:Date:${new Date()} - LONG MSG`
        }else{
            msg = `[Film ${filmId}] ${comment}`
        }
        console.log(msg);
    }

}
