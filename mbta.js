const subwayLines = {
	Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
	Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
	Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
};

const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {

	let totalNumberOfStops = 0;

	if (Object.keys(subwayLines).indexOf(startLine) !== -1 && Object.keys(subwayLines).indexOf(endLine) !== -1) {

		if (subwayLines[startLine].indexOf(startStation) !== -1 && subwayLines[endLine].indexOf(endStation) !== -1) {

			const startStationIndex = subwayLines[startLine].indexOf(startStation);
			const endStationIndex = subwayLines[endLine].indexOf(endStation);

			if (Object.keys(subwayLines).indexOf(startLine) === Object.keys(subwayLines).indexOf(endLine)) {

				if (startStationIndex < endStationIndex) {
					totalNumberOfStops = endStationIndex - startStationIndex;
				} else {
					totalNumberOfStops = startStationIndex - endStationIndex;
				}

				return printRoute(startLine, startStation, endLine, endStation, totalNumberOfStops);
			}

			if (Object.keys(subwayLines).indexOf(startLine) !== Object.keys(subwayLines).indexOf(endLine)) {

				const interStationOnStartLine = subwayLines[startLine].indexOf("Park Street");
				const interStationOnEndLine = subwayLines[endLine].indexOf("Park Street");
				let subtractInterStations = 0;

				if (interStationOnStartLine > interStationOnEndLine) {
					subtractInterStations = interStationOnStartLine - interStationOnEndLine;
				} else {
					subtractInterStations = interStationOnEndLine - interStationOnStartLine;
				}

				if (startStationIndex < endStationIndex) {
					totalNumberOfStops = endStationIndex - startStationIndex - subtractInterStations;
				} else {
					totalNumberOfStops = startStationIndex - endStationIndex - subtractInterStations;
				}

				return printRoute(startLine, startStation, endLine, endStation, totalNumberOfStops);
			}
		} else {
			return "There are no stations with " + startStation + " or " + endStation + " names";
		}
	} else {
		return "There are no lines with " + startLine + " or " + endLine + " names";
	}
}

const printRoute = function (startLine, startStation, endLine, endStation, totalNumberOfStops) {
	console.log("From " + startStation + ", rider needs " + totalNumberOfStops + " stops to arrive to " + endStation);
	console.log("Rider boards the train at " + startLine + " Line and " + startStation);
	console.log("Rider arrives at " + endLine + " Line and " + endStation);
	console.log("Rider exits the train at " + endLine + " Line and " + endStation);
}