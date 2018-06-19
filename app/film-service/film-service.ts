import {Injectable, Input} from '@angular/core';

export class Film {
    public reviews:Array<string>;
    constructor(
        public id: number,
        public openingHours: string,
        public averagePrice: string,
        public address: string,
        public title: string,
        public county: string,
        public location: string,
        public type: string,
        public score: number,
        public about: string
        )
        //public genres: Array<string>)
         {
        this.reviews = [];

    }
}
@Injectable()
export class FilmService {
    private films: Array<Film>;
    private films2: Array<Film>;


    constructor(){
        this.films = [
        // dublin - Temple bar
            new Film(0,'10.00 to 22.00', '25 Euro','12 Fownes Street Upper, Temple Bar, Dublin 2', 'La Caverna' , 'Dublin', 'Temple Bar', 'European', 4, 'La Caverna Restaurant and Wine Bar is a cosy place based in the heart of Temple Bar, one of the most vibrant and popular area in Dublin. We have a lovely restaurant with scrumptious dishes, over 150 bottles wine served by glass at prices that are most reasonable and also other beers and spirits. Its authenticity is accentuated by the fresh, original dishes from Ireland including selection of fish, steaks, lamb, duck, venison, chicken (all delivered by the local providers) and some Italian specialities.. It is built on the rich Irish spirit that makes a gathering place feel like home. The Restaurant has 3 separate, private dining rooms - one of them being the cellar, a 300 years old room transformed into a beautiful dining room and a wine bar. The ground floor is a spacious room with the tables and fish tanks. The top floor has a truly intimate atmosphere by loads of candles placed on unique brick wall. With the capacity of 100 seats, we’ve become a neighbourhood favorite for corporate events, wedding dinners, birthday and office parties, wine tastings and much more. We can offer special menu tailored to your demands. Our private party event staffs are proud to be working with dozens of businesses in the Dublin area all year round.' ),
            new Film(1,'12.00 to 23.00',  '10 Euro', '3 Crown Alley, Temple Bar, Dublin 2', 'The Old Storehouse' , 'Dublin', 'Temple Bar', 'Pub', 3, 'Welcome to The Old Storehouse online. Visit our site as often as possible to keep abreast of upcoming events. Here at The Old Storehouse we are committed to providing our customers with quality service and entertainment at affordable prices. We are renound for live music 7 days per week with no admission charges. The Old Storehouse is a Classic Irish Bar in the heart of Dublins Cultural Quarter - Temple Bar, Dublin 2.'),
            new Film(2,'10.00 to 22.00','15 Euro', '15 Crown Alley, Temple Bar, Dublin 2', 'Vintage Coctail Club' , 'Dublin', 'Temple Bar', 'European', 4,'Welcome to the home of Vintage Cocktail Club, an exclusive cocktail and dining experience in the heart of Dublin city. Refined, relaxed, welcoming, VCC is the perfect intimate gathering place for an after work catch up, pre-show cocktails, that secret rendezvous or a debauched late night party! Our chic and comfortable vintage surroundings are a throwback to the golden age of speakeasies, aviators and silent movie starlets. Our extensive, award winning cocktail menu is lots of fun and our plates of food are a gourmet treat! Come ring our doorbell, take a seat and allow us to indulge your every cocktail whim and feed your hungry bellies.'),
        // dublin - Malahide
            new Film(3,'10.00 to 22.00','25 Euro','Island View Hotel Coast Rd, Malahide, Co. IE', 'Oscar Tylor Restaurant' , 'Dublin', 'Malahide', 'Seafood', 4, 'Oscar Taylors Restaurant is one of the most popular eating establishments in the Fingal and Malahide area. With a seating capacity of 170, it is the most spacious, with more than ample room for the discerning diner. Planned and built on the top of the Island View Hotel, with an excellent sea view and a fantastic atmosphere and our extensive menu caters for all tastes.'),
            new Film(4,'12.00 to 22.00','15 Euro', '15 Townyard Ln, Malahide, Co. Dublin', 'Greedy Goose' , 'Dublin', 'Malahide', 'European', 3, 'Our menu is not structured around the traditional (starters, mains and desserts) categories, but is instead an open invitation to order from our specially selected tasting menus a, b, or c , or order randomly from any of the menu selections – adopting tasting sized dishes. to create an innovative dining experience... The greedy goose is situated in Malahide, enjoying spectacular views over the marina.'),
            new Film(5,'12.00 to 22.00','20 Euro', '1 Ross Terrace, New Street, Malahide, Dublin', 'Il Sorriso' , 'Dublin', 'Malahide', 'Italian', 4 ,' L Sorriso is the perfect place to casually enjoy friends and family over great food and wine. The service is excellent, the way it used to be at grandma’s house. They offer a full menu that features authentic flavours. Their foods are always made fresh to order, using only the highest quality ingredients to ensure great taste every time. They blend traditional home cooking with hearty dishes from the Italian Peninsula in a relaxed, comfortable atmosphere.Ready to sit back, relax, and be catered to? Their courteous professional staff are happy to serve. From family dining to a night out, our restaurant is great for everyone.'),
        // dublin - Blanchardstown
            new Film(6,'13.00 to 22.00','12 Euro','410, Retail Park 2, Blanchardstown, Dublin 15', 'Wagamama' , 'Dublin', 'Blanchardstown', 'Japanese', 4, 'Wagamama is located in the centre of Blanchardstown in Dublin 15. Wagamama is a pan-Asian restaurant that specializes in Japanese inspired cuisine in a minimalist setting. The Wagamama’s restaurants have steadily garnered an excellent reputation in Dublin and beyond. This restaurant is famous for its casual approach to dining with the philosophy being that people should share this informal dining experience with other diners by sitting beside one another. Wagamamas wide ranging menu presents everything from hot meat and seafood chili dishes, to traditional ramen and lobster salad. The friendly staff are experts on the menus and will advise you if there are any queries regarding special dietary needs. There are also lots of options for vegetarians and others with special dietary requirements.'),
            new Film(7,'10.00 to 00.00','10 Euro','Westend Retail Park, Blanchardstown, Dublin 15', 'The Great Wood' , 'Dublin', 'Blanchardstown', 'Pub', 2, 'A part of the JD wetherspoons group the Great Wood offers both food and drinks at extremely competitive prices.'),
            new Film(8,'10.00 to 22.00','10 Euro','Blanchardstown Centre, Blanchardstown, Dublin', 'Milano' , 'Dublin', 'Blanchardstown', 'Italian', 4, 'This is a spacious new Milano restaurant in The Blanchardstown Centre shopping, leisure and retail park. Blanchardstown is located about 10km north-west of Dublin city centre.'),
        // Kerry - Dingle
            new Film(9,'12.00 to 21.00','25 Euro','Main St, Grove, Dingle, Co. Kerry', 'Lord Bakers Seafood' , 'Kerry', 'Dingle', 'Seafood', 4, 'This is believed to be the oldest pub in Dingle. In 1890, Tom Baker, who came from Gallaras, purchased this well-located premises, and in a short space of time he transformed it into a hive of activity, trading in wine and spirits, tea, flour, wool and general farm supplies, as well as catering for wedding receptions. A very popular businessman and excellent and colourful orator, Tom Baker was elected to Kerry Country Council. He later became a successful auctioneer, and was appointed as Director of the Tralee-Dingle Railway. Held in very high esteem in Dingle and in the surrounding parishes, he was, in effect, the local ombudsman and was affectionately referred to as "Lord Baker".'),
            new Film(10,'14.00 to 22.00','20 Euro','Main St, Grove, Dingle, Co. Kerry', 'The Global Village' , 'Kerry', 'Dingle', 'European', 3, 'Ranked the best restaurant in Kerry in 2013 by the Irish Restaurants Award. The restaurant board displays the local provenance; fresh fish from inshore local fisherman, fresh meat from farmers who operate a sustainable farming policy and the seasonal vegetables grown in the Global Village chemical free vegetable garden run using biodynamic principles. The extensive wine list is complimented by a range of craft beers.'),
            new Film(11,'11.00 to 21.00','7 Euro','Main St, Grove, Dingle, Co. Kerry', 'Adams  Bar' , 'Kerry', 'Dingle', 'Pub', 3, ' No words could be found on internet to describehow awesome this restaurant is!'),
        // Kerry - Killarney
            new Film(12,'13.00 to 22.00','20 Euro','Muckross Road, Killegy Lower, Killarney', 'Yaw Tree Restaurant' , 'Kerry', 'Killarney', 'European', 4, 'Located in the original 19th Cemtury Piano Lounge of Muckross Park Hotel, The Award winning Yew Tree Restaurant offers an amazing dining experience. The ambience of a classical dining room situated in a room of character. Superb menu selections and choices compliment this fine restaurant. With the best of Irish produce and local ingredients and traditional methods they aim to create menus that appeal, inspire and satisfy. The carefully created 5-Star Menus, from full A la Carte Menu to distinct tasting menus.'),
            new Film(13,'12.00 to 21.00','15 Euro','Muckross Lodge, Muckross Rd, Killarney', 'The Jarveys Rest' , 'Kerry', 'Killarney', 'Irish', 3, 'The Jarveys Rest is part of the Muckross Park Hotel and was previously known as Moll Darcys. It stands alone from the hotel and is a great casual-dining alternative to the restaurant. Its bursting with old-world atmosphere, helped by wooden floors, stone walls, beamed ceilings and open fires. It also hosts an "Irish Nights" night 5 days a week.'),
            new Film(14,'10.00 to 22.00','15 Euro','18 College St, Killarney', 'Lord Kenmares Restaurant' , 'Kerry', 'Killarney', 'Irish', 3, 'Lord Kenmares Restaurant introduces you to the finest in contemporary cuisine. We combine the rich culture of the Mediterranean with the flavour of modern Irish cuisine to cater for a variety of tastes. The extensive range of dishes available are complemented by a truly comprehensive wine list.'),

        // Kerry - Tralee
            new Film(15,'13.00 to 23.00','15 Euro','Clash West, Oakpark, Tralee, Co. Kerry', 'Meadowlands Restaurant' , 'Kerry', 'Tralee', 'Irish', 4,''),
            new Film(16,'14.00 to 22.00','15 Euro','16 Abbey St, Tralee, Co. Kerry', 'Cassidys Restaurant' , 'Kerry', 'Tralee', 'European', 3,  'One of Kerrys finer restaurants offering a superb quality dining experience in the heart of Tralee. With ample parking outside, this restaurant makes for an excellent choice for those looking for an excellent meal. Cassidys is a traditional style restaurant offering a cosy dining experience with friendly service.'),
            new Film(17,'11.00 to 02.00','7 Euro','Main St, Grove, Dingle, Co. Kerry', 'Adams Bar' , 'Kerry', 'Dingle', 'Pub', 3,' '), 
        ];
        this.films2 = []; 
    }

    getFilms(): Array<Film>{
        return this.films;
    }

    getFilmById(id: number): Film {
        return this.films[id];
    }

   /* getFilmsByDublin(){
            this.films = [
            new Film(0, 'La Caverna' , 'Dublin', 'Temple Bar', 'European', 4.5),
            new Film(1, 'The Old Storehouse' , 'Dublin', 'Temple Bar', 'Pub', 3.0),
            new Film(2, 'Vintage Coctail Club' , 'Dublin', 'Temple Bar', 'European', 4.2),
            new Film(3, 'Oscar Tylor Restaurant' , 'Dublin', 'Malahide', 'Seafood', 4.0),
            new Film(4, 'Greedy Goose' , 'Dublin', 'Malahide', 'European', 3.8),
            new Film(5, 'Il Sorriso' , 'Dublin', 'Malahide', 'Italian', 4.2),
            ];
    }*/

     getFilmsBySelection(cou: string, loc: string, typ: string, sco: number) {
        this.films2=[];
        var counter=0;
        for(var i = 0; i < this.films.length; i++) {
            if (this.films[i].county == cou && this.films[i].location == loc && this.films[i].type == typ && this.films[i].score == sco) {
                this.films2.push(this.films[i]);
                console.log(this.films2[counter].title);
                console.log(1);
                counter++;
            }

             if (this.films[i].county == cou && ( sco==null || typ=="" || loc=="")){ // if county is entered-------------------------------------------------

                if ( this.films[i].score == sco){
                    if (this.films[i].location == loc) {
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(2);
                        counter++;
                    }
                    if (this.films[i].type == typ) {
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(3);
                        counter++;
                    }
                    if(loc==""&&typ==""){
                        this.films2.push(this.films[i]);
                          console.log(this.films2[counter].title);
                          console.log(4);
                        counter++;
                    }                
                }


                if (this.films[i].location == loc) {
                    if (this.films[i].type == typ) {
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(5);
                        counter++;
                    }
                    if(typ=="" && sco==null){
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(6);
                        counter++;
                    }
                }

            
                if (this.films[i].type == typ) {
                    if(sco==null && loc==""){
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(7);
                        counter++;
                    }
                }


                if(sco==null&&loc==""&&typ==""){
                    this.films2.push(this.films[i]);
                    console.log(this.films2[counter].title);
                    console.log(8);
                    counter++;   
                }

            }

         //------------------------------------------------------------------------------------------------------------------------       
             if (cou=="" && ( sco==null || typ=="" || loc=="")){ // if county is not entered-------------------------------------------------

                if ( this.films[i].score == sco){
                    if (this.films[i].location == loc) {
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(2);
                        counter++;
                    }
                    if (this.films[i].type == typ) {
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(3);
                        counter++;
                    }
                    if(loc==""&&typ==""){
                        this.films2.push(this.films[i]);
                          console.log(this.films2[counter].title);
                          console.log(4);
                        counter++;
                    }                
                }


                if (this.films[i].location == loc) {
                    if (this.films[i].type == typ) {
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(5);
                        counter++;
                    }
                    if(typ=="" && sco==null){
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(6);
                        counter++;
                    }
                }

            
                if (this.films[i].type == typ) {
                    if(sco==null && loc==""){
                        this.films2.push(this.films[i]);
                        console.log(this.films2[counter].title);
                        console.log(7);
                        counter++;
                    }
                }


                if(sco==null&&loc==""&&typ==""){
                    this.films2.push(this.films[i]);
                    console.log(this.films2[counter].title);
                    console.log(8);
                    counter++;   
                }

            }
             
           if (cou=="" ){ // if county is not entered but everythig else is-------------------------------------------------

                if ( this.films[i].score == sco){
                    if (this.films[i].location == loc) {
                        if (this.films[i].type == typ) {
                            this.films2.push(this.films[i]);
                            console.log(this.films2[counter].title);
                            console.log(2);
                            counter++;
                        }
                    }
                }
            }
//----------------------------------------------------------------------------------------------------------------------------------


            }//end of for
        
        return this.films2;
        
        }    
    }
    

                   
                    
        
        
        //let cloned = source.map(x => Object.assign({}, x));

    


