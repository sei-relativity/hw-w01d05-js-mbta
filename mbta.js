const subwayLines = {
    Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis","Alewife"],
    Green: ["Government Center", "Park Streen", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
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
    let toInter1 = 0;
    let toInter2 = 0;
    if(!check(startL, startS)) return "Please enter a valid input"
    if(!check(endL, endS)) return "Please enter a valid input"
    if(startL == endL){
        count = Math.abs(subwayLines[startL].indexOf(startS) - subwayLines[endL].indexOf(endS))
        return count
    }
    else {
        toInter1 = Math.abs(subwayLines[endL].indexOf(endS)-subwayLines[endL].indexOf("Park Street"))
        toInter2 = Math.abs(subwayLines[startL].indexOf(startS)-subwayLines[startL].indexOf("Park Street"))
        count = Math.abs(toInter2-toInter1)
    }
    return count
}
console.log(stopsBetweenStations("Red", "Alewife", "Red", "South Station"))
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'))
console.log(stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife'))
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'))
console.log(stopsBetweenStations('Green', 'Boylston', 'Orange', 'State'))