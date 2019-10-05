const mbta = {
    red:["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"],
    green:["Goverment Center","Park Street","Bolyston","Arlington","Copley","Hynes","Kenmore"],
    orange:["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"]
    };
    const stopBetweenstations = function(startLine, startStation, endLine, endStation){
    
    const start= mbta[startLine].indexOf(startStation);
    const end= mbta[endLine].indexOf(endStation);
    
    let numOfStops= 0;
    let current= startStation;
    
    if(startLine == endLine){
    
      if(start<end){
      for(let i=start ; i<end ; i++){
      current= mbta[startLine][i];
      numOfStops++;}
    
      return numOfStops + " stops";}
    
      else{
      for(let x=end ; x<start ; x++){
      current= mbta[startLine][x];
      numOfStops++;}
    
      return numOfStops + " stops";}}
    
    else{
    let parkStreet = mbta[startLine].indexOf("Park Street");
    
    if(start>parkStreet){
    
      for(let i=parkStreet ; i<start ; i++){
      current= mbta[startLine][i];
      numOfStops++;
      }
    
      parkStreet = mbta[endLine].indexOf("Park Street");
    
      if(parkStreet<end){
      for(let x=parkStreet ; x<end ; x++){
        current= mbta[endLine][x];
        numOfStops++;}
    
        return numOfStops + " stops";}
    
       else{
       for(let z=parkStreet ; z>end ; z--){
        current= mbta[endLine][z];
        numOfStops++;}
    
        return numOfStops + " stops";}}
    
      else{
      for(let y=start ; y<parkStreet ; y++){
      current= mbta[startLine][y];
      numOfStops++;}
    
      parkStreet = mbta[endLine].indexOf("Park Street");
    
      if(parkStreet<end){
      for(let y=parkStreet ; y<end ; y++){
        current= mbta[endLine][y];
        numOfStops;}
      return numOfStops + " stops";}
    
      else{
      for(let z=parkStreet ; z>end ; z--){
        current= mbta[endLine][z];
        numOfStops++;}
        return numOfStops + " stops";}}}}
    
    stopBetweenstations("green","Goverment Center","red","South Station");
    output:"2 stops"
    stopBetweenstations("orange","Forest Hills","green","Goverment Center");
    output:"6 stops"
    stopBetweenstations("red","Alewife","red","Alewife");
    output:"0 stops"
    stopBetweenstations("red","Alewife","red","South Station");
    output:"7 stops"
    stopBetweenstations("green","Copley","orange","Forest Hills");
    output:"8 stops"
    stopBetweenstations("red","Davis","green","Kenmore");
    output:"10 stops"