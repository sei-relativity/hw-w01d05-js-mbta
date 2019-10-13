const lines = {
    red: ["south station", "park street", "kendall", "central", "harvard", "porter", "davis", "alewife"],
	green: ["government center", "park street", "boylston", "arlington", "copley", "hynes", "kenmore"],
	orange: ["north station", "haymarket", "park street", "state", "sdwntown crossing", "chinatown", "back bay", "forest hills"]
}

const stopsBetweenStations = function(startLine,startStation,endLine,endStation){
    let stops = 0;
    const startStationIndex = lines[startLine].indexOf(startStation);
    const endStationIndex = lines[endLine].indexOf(endStation);

    if (Object.keys(lines).indexOf(startLine) === Object.keys(lines).indexOf(endLine)){
        if (endStationIndex > startStationIndex){
        stops = (endStationIndex - startStationIndex);
        }
        else {
            stops = (startStationIndex - endStationIndex);
        }
    }
    
    if (Object.keys(lines).indexOf(startLine) !== Object.keys(lines).indexOf(endLine)){
        const startIntersection = lines[startLine].indexOf("street park");
        const endIntersection = lines[endLine].indexOf("street park");
        let intersection = 0;
        if (endIntersection > startIntersection){
        intersection = (endIntersection - startIntersection);
        }
        else {
            intersection = (startIntersection - endIntersection)
        }
        if (endStationIndex > startStationIndex){
            stops = (endStationIndex + startStationIndex - intersection)
        }
        else {
            stops = (startStationIndex + endStationIndex - intersection)
        }
    }
    return "The train will stop "+stops+" times";
};