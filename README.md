redLineStops=['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife'];
greenLineStops=['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'];
orangeLineStops=['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']

function stopsBetweenStations(startline , startStation , endLine ,endStation){

    if(startline === 'Red' && endLine==='Red'){                      

        let stops=0;
        let count=0;
        for (let i = redLineStops.indexOf(startStation); i >= 0; i--) {            
            stops = count++;      
            if (redLineStops[i] === endStation) {

                console.log('stops ' + stops + ' from ' + startStation + ' to ' + endStation);
            }
        }        
    }