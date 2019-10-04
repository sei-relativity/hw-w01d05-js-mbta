const printIt = function (lSLine, sS, lELine, eS) {
    let f = 0;//the flag is on when changing the line is needed

    const stops = {
        red: ['south station', 'park street', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
        green: ['government center', 'park street', 'boylston', 'arlington', 'copley', 'hynes', 'kenmore'],
        orange: ['north station', 'haymarket', 'park street', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
    }
    if (lSLine == lELine) {
        if (sS > eS) {
            var route = stops[lSLine].slice(eS, sS + 1)
            route.reverse();
        }
        else {
            var route = stops[lSLine].slice(sS, eS + 1);
        }
    }
    else {
        f++
        const sParkStreet = stops[lSLine].indexOf('park street');//park street index on the start line
        const eParkStreet = stops[lELine].indexOf('park street');// park street index on the end line

        if (sParkStreet > sS) {
            var route = stops[lSLine].slice(sS, sParkStreet + 1);
        }
        else {
            var route = stops[lSLine].slice(sParkStreet, sS + 1);
            route.reverse();
        }
        if (eParkStreet < eS) {
            var route2 = stops[lELine].slice(eParkStreet + 1, eS + 1)
        }
        else {
            var route2 = stops[lELine].slice(eS, eParkStreet);
            route2.reverse()
        }
        for (i of route2) {
            route.push(i);
        }
    }

    for (i in route) {
        let x = route[i].split(' ');
        for (c in x) {
            x[c] = x[c].slice(0, 1).toUpperCase() + x[c].slice(1, x[c].length)
        }
        x = x.join(' ');
        route[i] = x;

    }
    for (i in route) {
        if (i == 0 && route[i] != 'Park Street')
            console.log('Rider boards the train at the ' + route[0] + ' station from the ' + lSLine.slice(0, 1).toUpperCase() + lSLine.slice(1, lSLine.length) + ' line.')
        if (i == 0 && route[i] == 'Park Street')
            console.log('Rider arrives at the Park Street station from the ' + lSLine.slice(0, 1).toUpperCase() + lSLine.slice(1, lSLine.length) + ' line side.')
        if (i > 0 && (f == 0 || f == 1))
            console.log('Rider arrives at the ' + route[i] + ' station on the ' + lSLine.slice(0, 1).toUpperCase() + lSLine.slice(1, lSLine.length) + ' line.')
        if (i > 0 && f == 2) {
            console.log('Rider arrives at the ' + route[i] + ' station on the ' + lELine.slice(0, 1).toUpperCase() + lELine.slice(1, lELine.length) + ' line.')

        }
        if (route[i] == 'Park Street' && f > 0) {
            f++;
            console.log('Rider changes lines at Park Street coming from the ' + lSLine.slice(0, 1).toUpperCase() + lSLine.slice(1, lSLine.length) + ' line going to ' + lELine.slice(0, 1).toUpperCase() + lELine.slice(1, lELine.length) + ' line, and boards the train')
        }

    }
    console.log('Rider exits the train at ' + route[route.length - 1] + ' station from the ' + lELine.slice(0, 1).toUpperCase() + lELine.slice(1, lELine.length) + ' line.')

}

const stopsBetweenStations = function (sLine, sStation, eLine, eStation) {
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
    if (!(sStation && eStation && stops[lSLine].indexOf(sStation.toString().toLowerCase()) >= 0 && stops[lELine].indexOf(eStation.toString().toLowerCase()) >= 0))
        return "Please select one of the available stations: \n red line stations: South Station, Park Street, Kendall, Central, Harvard, Porter, Davis, and Alewife. \n green line stations: Government Center, Park Street, Boylston, Arlington, Copley, Hynes, and Kenmore. \n orange line stations: North Station, Haymarket, Park Street, State, Downtown Crossing, Chinatown, Back Bay, and Forest Hills."

    const lSStation = sStation.toLowerCase();//lowercase start station
    const lEStation = eStation.toLowerCase();//lowercase end station

    //Finding the postions of the stations
    const sS = stops[lSLine].indexOf(lSStation);
    const eS = stops[lELine].indexOf(lEStation);

    //Printing the stops
    printIt(lSLine, sS, lELine, eS);
    //calculating the number of stops
    if (lSLine == lELine) {
        return " The distance is " + Math.abs(eS - sS);
    }
    return "The distance is " + (Math.abs(sS - stops[lSLine].indexOf('park street')) + Math.abs(eS - stops[lELine].indexOf('park street')));

}

/*
Sample tests and results without printing the riders stops
*/
stopsBetweenStations('green', 'copley', 'red', 'park street') // 3
stopsBetweenStations('ReD', 'KeNdAll', 'oRange', 'State') // 2
stopsBetweenStations('ReD', 'KeNdAll', 'red', 'kendall') // 0
stopsBetweenStations('green', '', 'red') // "Please select one of the available stations...
stopsBetweenStations(3, 'Aloe', 'red', 'park street') //"Please select one of available lines: red...
stopsBetweenStations() // "Please select one of available lines: red...



//Sample tests and resutls with printing the riders stops

stopsBetweenStations('green', 'copley', 'red', 'central')
/*
Rider boards the train at the Copley station from the Green line.
Rider arrives at the Arlington station on the Green line.
Rider arrives at the Boylston station on the Green line.
Rider arrives at the Park Street station on the Green line.
Rider changes lines at Park Street coming from the Green line going to Red line, and boards the train
Rider arrives at the Kendall station on the Red line.
Rider arrives at the Central station on the Red line.
Rider exits the train at Central station from the Red line.
"The distance is 5"
*/
stopsBetweenStations('ReD', 'KeNdAll', 'oRange', 'State')
/*
Rider boards the train at the Kendall station from the Red line.
Rider arrives at the Park Street station on the Red line.
Rider changes lines at Park Street coming from the Green line going to Red line, and boards the train
Rider arrives at the State station on the Orange line.
Rider exits the train at State station from the Orange line.
"The distance is 2"
*/
stopsBetweenStations('red', 'south station', 'red', 'alewife')
/*
Rider boards the train at the South Station station from the Red line.
Rider arrives at the Park Street station on the Red line.
Rider arrives at the Kendall station on the Red line.
Rider arrives at the Central station on the Red line.
Rider arrives at the Harvard station on the Red line.
Rider arrives at the Porter station on the Red line.
Rider arrives at the Davis station on the Red line.
Rider arrives at the Alewife station on the Red line.
Rider exits the train at Alewife station from the Red line.
" The distance is 7"
*/
stopsBetweenStations('green', 'park street', 'red', 'alewife')
/*
Rider arrives at the Park Street station from the Green line side.
Rider changes lines at Park Street coming from the Green line going to Red line, and boards the train
Rider arrives at the Kendall station on the Red line.
Rider arrives at the Central station on the Red line.
Rider arrives at the Harvard station on the Red line.
Rider arrives at the Porter station on the Red line.
Rider arrives at the Davis station on the Red line.
Rider arrives at the Alewife station on the Red line.
Rider exits the train at Alewife station from the Red line.
"The distance is 6"
*/
