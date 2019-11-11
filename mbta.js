
const stopBetweenStation = function(startLine, startStation, endLine, endStation){
        
    const lines= {
        red: [ 'South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
        green: [ 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
        orange: [ 'North Station', 'Haymarket', 'Park Street', 'State', 'Downtown', 'Chinatown', 'Back Bay', 'Forest Hills'],
    };
    
        if(startLine === endLine){
        let indexOfStartStation = lines[startLine].indexOf(startStation);
        let indexOfEndStation = lines[startLine].indexOf(endStation);
        let stops = Math.abs(indexOfStartStation - indexOfEndStation);
        console.log(stops)
        };

        if(startLine !== endLine){
            let startStationindex = lines[startLine].indexOf(startStation);
            let parkStart = lines[startLine].indexOf('Park Street')
            let tripOne = Math.abs(parkStart - startStationindex);

            let endPoint = lines[endLine].indexOf(endStation);
            let parkTwo = lines[endLine].indexOf('Park Street');
            let tripTwo = Math.abs(parkTwo - endPoint)
            
            let total = tripTwo + tripOne 
            
            console.log(total)
        }

        };

