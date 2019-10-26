const subwayLines = {
    Red:[
        'South Station',
        'Park Street',
        'Kendall',
        'Central',
        'Harvard',
        'Porter',
        'Davis',
        'Alewife'
    ],
    Green: [
        'Government Center',
        'Park Street',
        'Boylston',
        'Arlington',
        'Copley',
        'Hynes',
        'Kenmore'
    ],
    Orange:[
        'North Station',
        'Haymarket',
        'Park Street',
        'State',
        'Downtown Crossing',
        'Chinatown',
        'Back Bay',
        'Forest Hills'
    ],
}
/*
this function will return the number of stops between two station 
*/

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
   
    const startStation = subwayLines[startLine].indexOf(startStation)
    
    const endStation = subwayLines[endLine].indexOf(endStation)
/* if the start station and the stop station are in the same line , 
then we will use the absolute metode to get the result in positive
*/

if ( startLine === endLine){
    return Math.abs(startStationIndex - endStationIndex)
}

/* if the start line station or the end line station will be the Park street station 
we will make the next steps :
*/

const startLineParkStreet = subwayLines[startLine].indexOf('Park Street');

const tripToParkStreet = Math.abs(startStation - startLineParkStreet);

const endLineStation = subwayLines[endLine].indexOf('Park Street');

const tripToDestination = Math.abs(endStation - endLineParkStreet);

/* get the total trip by adding the tripToParkStreet to tripToDestination
*/

const totalTrip = tripToParkStreet + tripToDestination 

return totalTrip ;
}