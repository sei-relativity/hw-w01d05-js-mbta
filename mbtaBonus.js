const subwayLines = {
    Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis","Alewife"],
    Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
    Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown","Back Bay", "Forest Hills"]
}
const check = function(line, station){
    for(const key in subwayLines){
        if(key == line){
            for(i =0; i<subwayLines[key].length; i++){
                if(station == subwayLines[key][i]) return true
            }
        }
    }
    return false
}
const stopsBetweenStations = function (startL, startS, endL, endS){
    let count = 0;
    let position = 0;
    if(!check(startL, startS)) return "Please enter a valid input"
    if(!check(endL, endS)) return "Please enter a valid input"
    console.log("Rider boards the train at "+startL+" Line and "+ startS)
    if(startL == endL){
        for( let i=0; i < subwayLines[startL].length; i++) {
            count++ 
            position = (i + (subwayLines[startL].indexOf(startS) + 1)) % subwayLines[startL].length;
            console.log("Riders arrives at "+startL+" and "+subwayLines[startL][position]);
            if(position == subwayLines[startL].indexOf(endS)) break;
        }
        
    }
    else {
        for( let i=0; i < subwayLines[startL].length; i++) {
            count++ 
            position = (i + (subwayLines[startL].indexOf(startS) + 1)) % subwayLines[startL].length;
            console.log("Riders arrives at "+startL+" and "+subwayLines[startL][position]);
            if(position == subwayLines[startL].indexOf("Park Street")) break;
        }
        console.log("Rider transfor from "+startL+" Line to "+endL+" at Park Street")
        for( let i=0; i < subwayLines[endL].length; i++) {
            count++ 
            position = (i + (subwayLines[endL].indexOf("Park Street") + 1)) % subwayLines[endL].length;
            console.log("Riders arrives at "+endL+" and "+subwayLines[endL][position]);
            if(position == subwayLines[endL].indexOf(endS)) break;
        }
    }
    console.log("Rider exists the train at "+endL+" and "+ endS )
    return "Number of stops is "+count
}
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Copley'))