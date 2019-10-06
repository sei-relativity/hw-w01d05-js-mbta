const mmta = {
Red: ['South Station', 'Park Street', 'Kendall','Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
Green: ['Government Center','Park Street', 'Boylston' , 'Arlington' , 'Copley', 'Hynes' , 'Kenmore'],
Orang: ['North Station', 'Haymarket', 'Park Street' , 'State' ,'Downtown Crossing' , 'Chinatown' ,'Back Bay' , 'Forest Hills']


const subway = function (sLine, startS, eLine, endS) {
    const lines = ['Red', 'Green', 'Orange'];
    if (!(sLine && eLine && lines.indexOf(sLine.toString().toLowerCase()) >= 0 && lines.indexOf(eLine.toString().toLowerCase()) >= 0))
        return "Please select one of available lines: Red, Green, OR Orange"

    const sl = sLine.toLowerCase();
    const el = eLine.toLowerCase();
};

if (!(startS && endS && subway[sl].indexOf(starS.toString().toLowerCase()) > 0 && stops[el].indexOf(endS.toString().toLowerCase()) > 0))
        return "Please select one of the available stations: \n red line stations: South Station, Park Street, Kendall, Central, Harvard, Porter, Davis, and Alewife. \n green line stations: Government Center, Park Street, Boylston, Arlington, Copley, Hynes, and Kenmore. \n orange line stations: North Station, Haymarket, Park Street, State, Downtown Crossing, Chinatown, Back Bay, and Forest Hills."

    const lSStation = starS.toLowerCase();
    const lEStation = endS.toLowerCase();

    //Finding the postions
    const sS = subway[st].indexOf(lSStation);
    const eS = subway[el].indexOf(lEStation);

    if (sLine == lELine) {
        return Math.abs(eS - sS);
    }
    return Math.abs(sS - stops[sLine].indexOf('park street')) + Math.abs(eS - stops[eLine].indexOf('park street'));


} // End function
