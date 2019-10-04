const mbta = function (sLine, sStation, eLine, eStation) {
    //Checking if the selected lines are valid selections
    const lines = ['red', 'green', 'orange'];
    if (!(sLine && eLine && lines.indexOf(sLine.toString().toLowerCase()) >= 0 && lines.indexOf(eLine.toString().toLowerCase()) >= 0))
        return "Please select one of available lines: red, green, or orange"

    const lSLine = sLine.toLowerCase();//lowercase start line
    const lELine = eLine.toLowerCase();//lowercase end line

    //Creating an object of the lines and stations
    const stops = {
        red: ['south station', 'park street', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
        green: ['government center', 'park street', 'boylston', 'arlington', 'copley', 'hynes', 'kenmore'],
        orange: ['north station', 'haymarket', 'park street', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
    }

    //Verifying that the selected stations are valid selections
    if (!(sStation && eStation && stops[lSLine].indexOf(sStation.toString().toLowerCase()) > 0 && stops[lELine].indexOf(eStation.toString().toLowerCase()) > 0))
        return "Please select one of the available stations: \n red line stations: South Station, Park Street, Kendall, Central, Harvard, Porter, Davis, and Alewife. \n green line stations: Government Center, Park Street, Boylston, Arlington, Copley, Hynes, and Kenmore. \n orange line stations: North Station, Haymarket, Park Street, State, Downtown Crossing, Chinatown, Back Bay, and Forest Hills."

    const lSStation = sStation.toLowerCase();//lowercase start station
    const lEStation = eStation.toLowerCase();//lowercase end station

    //Finding the postions of the stations
    const sS = stops[lSLine].indexOf(lSStation);
    const eS = stops[lELine].indexOf(lEStation);



    //calculating the number of stops
    if (lSLine == lELine) {
        return Math.abs(eS - sS);
    }
    return Math.abs(sS - stops[lSLine].indexOf('park street')) + Math.abs(eS - stops[lELine].indexOf('park street'));

}

/*
Here are sample tests with results
*/
mbta('green', 'copley', 'red', 'park street') // 3
mbta('ReD', 'KeNdAll', 'oRange', 'State') // 2
mbta('ReD', 'KeNdAll', 'red', 'kendall') // 0
mbta('green', '', 'red') // "Please select one of the available stations...
mbta(3, 'Aloe', 'red', 'park street') //"Please select one of available lines: red...
