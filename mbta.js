const subway = {
    Red:["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"],
    Green:["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"],
    Orange:["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"]
}
const stopsBetweenStations =function(startLain,endLine,startStation,endStation){
    
startLain===startStation;

for(let i =0; i < subway[i].length;i++){
    
    startLain +=i;
    
    return startLain;
}

endLine===endStation;

for(let i =0; i < subway[i].length;i++){

    endLine +=subway[i];

return endLine;
}

}

/*
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
*/
