// const Red = ["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"];
// const Green = ["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"];
// const Orange = ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay", "Back Bay"];


// const MBTA = function(){

// }


const h = {

    line:  [Red =["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"],
           Green =["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"],
           Orange =["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay", "Forest Hills"]
            ],

    MBTA: function(start_line, start_station, end_line, end_station){
            for(let i=0; i< this.line.length; i++){
                let ride = 1;
                while(ride == true){
                    let stop = 0;
                    if(start_line === this.line[i][i] && start_station ===this.line[i][i] && end_line=== this.line[i][i] && end_station===this.line[i][i]){
                        console.log( stop = stop + this.line[i]);
                    }
                    
                    else{ return false;}
                }
                console.log("total stop " + stop);

            }
            Console.log(this.MBTA());
        }
    
    }  
   
        