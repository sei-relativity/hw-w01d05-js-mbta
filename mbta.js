const mbta = {
    Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
        'Porter', 'Davis', 'Alewife'
    ],
    Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington',
        'Copley', 'Hynes', 'Kenmore'
    ],
    Orange: ['Nourth Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing',
        'Chinatown', 'Back Bay', 'Forest Hills'
    ]
}
const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    let stops = 0;
    let current = startStation;
    
    const startStationList = mbta[startLine].indexOf(startStation);
    const endStationList = mbta[endLine].indexof(endStation);
     
     if(startStationList === endStationList){
    
    
    
    
     }