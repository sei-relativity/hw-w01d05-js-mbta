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

const stopsBetweenStations = function(startLine, hopinStations, endLine, getoffStations) {
    if (Object.keys(mbta).indexOf(startLine) !== -1 && Object.keys(mbta).indexOf(endLine) !== -1) {
        if (mbta[startLine].indexOf(hopinStations) !== -1 && mbta[endLine].indexOf(getoffStations) !== -1) {
            let L = 0;
            let count = 0;
            if (startLine === endLine) {
                if (mbta[startLine].indexOf(hopinStations) <= mbta[endLine].indexOf(getoffStations)) { return count }
                console.log('Rider boards the train a ' + startLine + ' Line and ' + hopinStations)
                if (mbta[startLine].indexOf(hopinStations) < mbta[endLine].indexOf(getoffStations)) {
                    for (let i = mbta[startLine].indexOf(hopinStations); i < mbta[startLine].length; i++) {
                        if (L !== 0) {
                            console.log('Rider arrives at ' + startLine + ' Line and ' + mbta[startLine][i])
                        }
                        L = 1;
                        if (i === mbta[endLine].indexOf(getoffStations)) {
                            console.log('Rider exits the train at ' + endLine + ' Line and ' + getoffStations)

                            return count;
                        }
                        count = count + 1
                    }
                } else {
                    let j = mbta[endLine].indexOf(hopinStations);
                    for (let i = mbta[endLine].indexOf(getoffStations); i <= mbta[startLine].indexOf(hopinStations); i++) {
                        if (L !== 0) { console.log('Rider arrives at ' + startLine + ' Line and ' + mbta[startLine][j]) }
                        L = 1;
                        j--;

                        if (i === mbta[startLine].indexOf(hopinStations)) {
                            console.log('Rider exits the train at ' + endLine + ' Line and ' + getoffStations)

                            return count;
                        }
                        count = count + 1
                    }
                }
            } else {
                if (mbta[startLine].indexOf(hopinStations) <= mbta[startLine].indexOf('Park Street')) {
                    for (let i = mbta[startLine].indexOf(hopinStations); i < mbta[startLine].length; i++) {
                        if (L !== 0) {
                            console.log('Rider arrives at ' + startLine + ' Line and ' + mbta[startLine][i])
                        }
                        L = 1;
                        if (mbta[startLine][i] === 'Park Street') {
                            console.log('Rider transfers from ' + startLine + ' Line to ' + endLine + ' at Park Street')
                            let j = mbta[endLine].indexOf('Park Street')

                            for (; j < mbta[endLine].length; j++) {
                                if (L !== 0) {
                                    console.log('Rider arrives the train a ' + endLine + ' Line and ' + mbta[endLine][j])
                                }
                                L = 1
                                if (j === mbta[endLine].indexOf(getoffStations)) {
                                    console.log('Rider exits the train at ' + endLine + ' Line and ' + mbta[endLine][j])

                                    return count;
                                }

                                count = count + 1;
                            }
                        }
                        count = count + 1;
                    }
                } else {
                    for (let i = mbta[startLine].indexOf(hopinStations); i >= mbta[startLine].indexOf('Park Street'); i--) {
                        if (L !== 0) {
                            console.log('Rider arrives at ' + startLine + ' Line and ' + mbta[startLine][i])
                        }
                        L = 1;
                        if (mbta[startLine][i] === 'Park Street') {
                            console.log('Rider transfers from ' + startLine + ' Line to ' + endLine + ' at Park Street')


                            if (mbta[endLine].indexOf('Park Street') <= mbta[endLine].indexOf(getoffStations)) {
                                for (let j = mbta[endLine].indexOf('Park Street'); j < mbta[endLine].length; j++) {
                                    if (L !== 1) {
                                        console.log('Rider arrives the train a ' + endLine + ' Line and ' + mbta[endLine][j])
                                    }
                                    L = 2
                                    if (j === mbta[endLine].indexOf(getoffStations)) {
                                        console.log('Rider exits the train at ' + endLine + ' Line and ' + mbta[endLine][j])

                                        return count;
                                    }

                                    count = count + 1;
                                }
                            } else {
                                for (let k = mbta[endLine].indexOf('Park Street'); k >= mbta[endLine].indexOf(getoffStations); k--) {
                                    if (L !== 2) {
                                        console.log('Rider arrives the train a ' + endLine + ' Line and ' + mbta[endLine][k])
                                    }
                                    L = 3
                                    if (k === mbta[endLine].indexOf(getoffStations)) {
                                        console.log('Rider exits the train at ' + endLine + ' Line and ' + mbta[endLine][k])

                                        return count;
                                    }

                                    count = count + 1;
                                }
                            }
                        }
                        count = count + 1;
                    }
                }
            }
        } else {
            return 'no Station with this name'
        }
    } else {
        return 'you have the wrong line for sure'
    }
}

console.log(stopsBetweenStations('Red', 'South Station', 'Red', 'Kendall')) //same line start Station before last
console.log(stopsBetweenStations('Green', 'Copley', 'Green', 'Government Center')) //same line start Station after the end
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')) //diffrent lines start Station before last
console.log(stopsBetweenStations('Orange', 'Back Bay', 'Green', 'Government Center')) //diffrent lines start Station after Park Street
    // and the end line Park Street is after the end
console.log(stopsBetweenStations('Green', 'Government Center', 'Orange', 'For est Hills')) // Station name wrong
console.log(stopsBetweenStations('Green', 'Government Center', 'blue', 'Kenmore')) // end line name wrong
console.log(stopsBetweenStations('blue', 'State', 'Orange', 'Forest Hills')) //start line name wrong
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')) //same stop