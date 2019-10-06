const mbta = { 
    Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
        'Porter', 'Davis', 'Alewife'
    ];
    Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington',
        'Copley', 'Hynes', 'Kenmore'
    ];
    Orange: ['Nourth Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing',
        'Chinatown', 'Back Bay', 'Forest Hills'
    ]
}

const stopBetweenStations = function(startLine, startStation, endLine, endStation ) 
{ 
        if (!(startLine && endLine && lines.indexOf(startLine.indexOf() >= 0 && lines.indexOf(endLine.indexOf() >= 0))
            return "choose one of lines: red, green, orange"
    
        const startLine = startStation.indexOf(startLine);
        const endLine = endStation.indexOf(endLine);
    
        if (!(startStation && endStation && stops[startLine].indexOf(startStation.indexOf > 0 && stops[endLine].indexOf(endStation.indexOf() > 0))
            return "choose one of stations: \n red line stations: South Station, Park Street, Kendall, Central, Harvard, Porter, Davis, and Alewife. 
            \n green line stations: Government Center, Park Street, Boylston, Arlington, Copley, Hynes, and Kenmore. 
            \n orange line stations: North Station, Haymarket, Park Street, State, Downtown Crossing, Chinatown, Back Bay, and Forest Hills."
    
        const startStation = stops[startLine].indexOf(startStation);
        const endStation = stops[endLine].indexOf(endStation);
    
        return Math.abs(startStation - stops[startLine].indexOf('park street')) Math.abs(endStation - stops[endLine].indexOf('park street'));
    
    
}