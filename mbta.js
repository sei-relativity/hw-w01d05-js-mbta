// Object to assign the subway lines as arrays
const subwayLines = {
	Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
	Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
	Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
};

// Function to calculate the route's total stops
const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {

	// Initialise a total number of stops variables
	let totalNumberOfStops = 0;

	// Check if the entered starting and ending lines are valid
	if (Object.keys(subwayLines).indexOf(startLine) !== -1 && Object.keys(subwayLines).indexOf(endLine) !== -1) {

		// Check if the entered starting and ending stations are valid
		if (subwayLines[startLine].indexOf(startStation) !== -1 && subwayLines[endLine].indexOf(endStation) !== -1) {

			// Declare variables and assign the entered starting and ending stations indexes
			const startStationIndex = subwayLines[startLine].indexOf(startStation);
			const endStationIndex = subwayLines[endLine].indexOf(endStation);

			// Check if the entered lines are equal
			if (Object.keys(subwayLines).indexOf(startLine) === Object.keys(subwayLines).indexOf(endLine)) {

				// Check if the starting station index is less than the ending station and vice versa, subtract to have the total stops number
				if (startStationIndex < endStationIndex) {
					totalNumberOfStops = endStationIndex - startStationIndex;
				} else {
					totalNumberOfStops = startStationIndex - endStationIndex;
				}

				// Return the printing function with result
				return printRoute(startLine, startStation, endLine, endStation, totalNumberOfStops);
			}

			// Check if the entered lines are equal
			if (Object.keys(subwayLines).indexOf(startLine) !== Object.keys(subwayLines).indexOf(endLine)) {

				// Assign "Park Street" station to the following variables
				const interStationOnStartLine = subwayLines[startLine].indexOf("Park Street");
				const interStationOnEndLine = subwayLines[endLine].indexOf("Park Street");
				let subtractInterStations = 0;

				// Check if "Park Street" station index on starting line is less than the "Park Street" station on the ending line and vice versa
				if (interStationOnStartLine > interStationOnEndLine) {
					subtractInterStations = interStationOnStartLine - interStationOnEndLine;
				} else {
					subtractInterStations = interStationOnEndLine - interStationOnStartLine;
				}

				// Check if the starting station index is less than the ending station and vice versa, subtract to have the total stops number, then substract "Park Street" station's index
				if (startStationIndex < endStationIndex) {
					totalNumberOfStops = endStationIndex - startStationIndex - subtractInterStations;
				} else {
					totalNumberOfStops = startStationIndex - endStationIndex - subtractInterStations;
				}

				// Return the printing function with result
				return printRoute(startLine, startStation, endLine, endStation, totalNumberOfStops);
			}
		} else {
			// Return a message to inform that there are no either starting or ending stations with the entered names
			return "There are no stations with " + startStation + " or " + endStation + " names";
		}
	} else {
		// Return a message to inform that there are no either starting or ending line with the entered names
		return "There are no lines with " + startLine + " or " + endLine + " names";
	}
}

// Function to print the route's details
const printRoute = function (startLine, startStation, endLine, endStation, totalNumberOfStops) {
	console.log("From " + startStation + ", rider needs " + totalNumberOfStops + " stops to arrive to " + endStation);
	console.log("Rider boards the train at " + startLine + " Line and " + startStation);
	console.log("Rider arrives at " + endLine + " Line and " + endStation);
	console.log("Rider exits the train at " + endLine + " Line and " + endStation);
}