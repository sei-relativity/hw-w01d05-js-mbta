const subwayLines =
{
red:['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife'],
green:['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'],
orange:['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']

//  function will stor the chosen array in new key to make flexable to use in travilingLine function

lineColor:function() { 
    if (n=subwayLines.red)
   {return subwayLines.red;}
   if (n=subwayLines.green)
   {return subwayLines.green;}
   if (n=subwayLines.orange)
   {return subwayLines.orange;}
};
 
// decleared puplic varibal to be used in different function 
let startLine =' ';
let startStation =' ' ;
let endLine =' ';
let endStation =' ';

//traveling on any line 
let travilingLine = function(subwayLines.lineColor)
{
    let count=0;
    int i =0 ;

     // Find the start station 
   for ( i=0 ; i<=subwayLines.lineColor.length ; i++ )
   { 
    if (subwayLines.lineColor[i] == startStation )
    {return  subwayLines.lineColor[i] ;
    break;}
 
   }
    //  // Find the End station 
    let j; 
    for (j = subwayLines.lineColor[i] ; j != endStation; j++) 
    {       count =+ 1;
        if (subwayLines.lineColor[j] == endStation ) 
            // return number of elements between two stations
           { return count;
             break; }
    } 
}

   
// checking if there is changing line and invoc the funtion to react 
let intersectionPoints = function ()
{

    let line;
    let line1= 'red';
    let line2= 'green';
    let line3= 'orange';

    // 1st contion if there is no change on the line 
     if (startLine == endLine )
       {
           line = startLine; //assign value for line
        // call function depend on the value in line
         if (line===line1){lineColor();} 
         if (line===line2){lineColor();}
         if (line===line3){lineColor();}

        }
// if there is chang on the line it will call function changPoint ()
else {
// this function will chang between 2 lines if it needed
let changPoint = function (){
   
    const intersectionPoints="Park Street";
    let crossCount=0;
    let crossCount2=0;

    // the loop will start from the start station and will stop if it reach intersectionPoints 
    for (x= subwayLines.lineColor()[x]; x != intersectionPoints ; x++) 
        {       crossCount =+ 1; 
            for (y = subwayLines.crossCount[x]; y != endStation; y++) 
            {      crossCount2 = crossCount+1;
                // return number of elements between two stations
                return crossCount2;
            }

        }
     }
   }
}

// function will give the output as final resuilt and check if there is ride to operate 
let numberOfStops = function()
{
    let getOn ;
    let getOff;

    //check if there is  a ride to run the code of traviling lin 
    if (getOn || getOff == 1)
    {
        intersectionPoints() ; // call function 
        travilingLine();
        console.log("srart line"+","+startLine+"start from"+":"+startStation +"end line"+","+endLine+"stop at"+":"+endStation+"stops between are:"+ intersectionPoints());

    }else{
        console.log("there is no trip");
         }

}




// other sloution ceating endivisual traviling line
/* //traveling on the Red line.
let redLine = function(subwayLines.red[])
{

    let count=0;
    int i=0 ;

     // Find the start station 
   for ( i=0 ; i<=subwayLines.red.length ; i++ )
   { 
    if (subwayLines.red[i] == startStation )
    break;
    return  subwayLines.red[i];
 
   }
    //  // Find the End station 
    let j; 
    for (j = subwayLines.red[i]; j != endStation; j++) 
    {       count =+ 1;
        if (subwayLines.red[j] == endStation ) 
            // return number of elements between two stations
            return count;
             break; 
    } 
}

//traveling on the green line.
let greenLine = function(subwayLines.green)
{
  
    let count2=0;
    int k=0 ;

     // Find the start station 
   for ( k=0 ; k<=subwayLines.green.length ; k++ )
   { 
    if (subwayLines.green[k] == startStation )
    break;
    return  subwayLines.green[k];
 
   }
    //  // Find the End station 
    let m; 
    for (m = subwayLines.green[m]; m != endStation; m++) 
    {       count2 =+ 1;
        if (subwayLines.green[m] == endStation ) 
            // return number of elements between two stations
            return count2;
             break; 
    } 
}

//traveling on the orange line.
let orangeLine = function(subwayLines.orange)
{
   
    let count3=0;
    int n =0 ;

     // Find the start station 
   for ( n=0 ; n<=subwayLines.orange.length ; n++ )
   { 
    if (subwayLines.orange[n] == startStation )
    break;
    return  subwayLines.orange[n];
 
   }
    //  // Find the End station 
    let r; 
    for (r = subwayLines.orange[r]; r != endStation; r++) 
    {       count3 =+ 1;
        if (subwayLines.orange[r] == endStation ) 
            // return number of elements between two stations
            return count3;
             break; 
    } 
}

*/