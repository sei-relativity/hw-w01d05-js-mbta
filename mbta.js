
const stopBetweenStation = function(startLine, startStation, endLine, endStation){

    const lines= {
        red: [ 'South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
        green: [ 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
        orange: [ 'North Station', 'Haymarket', 'Park Street', 'State', 'Downtown', 'Chinatown', 'Back Bay', 'Forest Hills'],
    },
    
        if(startLine === endLine){
        let indexOfStartStation = lines[startLine].indexOf(startStation);
        let indexOfEndStation = lines[startLine].indexOf(endStation);
        let stops = indexOfStartStation - indexOfEndStation
        console.log(Math.abs(stops))
        }

        if(startLine !== endLine){
            let indexOfStartStation = lines[startLine].indexOf('Park Street');
            let indexOfEndStation = lines[endtLine].indexOf('Park Street');
            let stops = indexOfEndStation - indexOfStartStation
        }
    }

    stopBetweenStation('red', 'Kendall', 'red', "Porter")
// (red, kendall, red, Central)
// }
/*const stopBetweenStation = function(startLine, startStation, endLine, endStation){
    let countr = 0
    for (let i=0; i <= startLine.length; i++){
        countr += startLine[i]

        let countrTwo = 0
        for (let b=0; b <= startStation.length; b++){
            countrTwo += startStation[b]
        }
        return countrTwo
    }
    return countr

    let countrThree = 0
    for (let c=0; c<= endLine.length; c++){
        countrThree += endLine[c]
        
        let countrFour = 0
        for (let d=0; d<= endStation.length; d++){
            countrFour += endStation[c]
        }

    }
    return countrThree
    
    const sum = function (countrThree, countrFour){
        let summation = countrThree + countrFour
        return summation 
    };

};
}


console.log(stopBetweenStation(green, Hynes, red, Central))*/