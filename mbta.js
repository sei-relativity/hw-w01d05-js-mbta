const train = {
    Red: [
        "South Station",
        "Park Street",
        "kendall",
        "Central",
        "Harvard",
        "Porter",
        "Davis",
        "Alewife"
        ],
    Green: [
        "Government Center",
        "Park Street",
        "Boylston",
        "Arlington",
        "Copley",
        "Hynes",
        "Kenmore"
        ],
    Orange: [
        "North Station",
        "Haymarket",
        "Park Street",
        "State",
        "Downtown Crossing",
        "Chinatown",
        "Back Bay",
        "Forest Hills"
        ]
};
const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
        let stops = 0;
        if (train.indexOf(startStation) < train.indexOf(endStation) || train.indexOf(startStation) > train.indexOf(endStation)) 
        {
            for (let i = train.indexOf(startStation); i < train[endLine].indexOf(endStation); i++) {
                return i++ + " Stops"; 
        }
        else 
        (let sameStation = 0;){
            return sameStation + " stops";
        }
    }
}