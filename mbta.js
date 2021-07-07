



const stopsBetweenStations = function (Start_Line, Start_Station, End_Line, End_Station

    ){
    const Subway ={
         "Red":['South Station','Park Street','Kendall' ,'Central',"Harvard","Porter","Davis","Alewife"],
         "Green":["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"],
         "Orange": ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"]

    }
   
    
        if (!( Object.getOwnPropertyNames(Subway).includes(Start_Line)) || !( Object.getOwnPropertyNames(Subway).includes(End_Line)) ){

                //debugger;
                return "invalid Road"}
        else if  (!(Subway[Start_Line].includes(Start_Station))  || !( Subway[End_Line].includes(End_Station)) )
            return "invalid Station"



    let state ="null";
    if (Start_Line===End_Line){
        if (Start_Station===End_Station)
            state = "in_place"
        else 
            state = "same_line"
    }
    else 
    {   
        state ="two_line" 
    }


    /*Start calculate stops basit on state */

    let stops=null;
    let start_point;
    let end_point ;


        switch(state){

            case "same_line":
                {
                    start_point=Subway[Start_Line].indexOf(Start_Station)  ;   
                    end_point=Subway[End_Line].indexOf(End_Station) ;      
                    return Math.abs(start_point-end_point)
                }
            case"in_place" :
                    return 0;

            case "two_line" :{
                    
                let temp1,temp2;
                start_point=Subway[Start_Line].indexOf(Start_Station);   
                end_point=Subway[Start_Line].indexOf("Park Street");   
                
                temp1 = Subway[End_Line].indexOf(End_Station);  
                temp2 = Subway[End_Line].indexOf("Park Street");  
                
                stops = Math.abs(start_point-end_point) + Math.abs(temp1-temp2);
               // debugger;
                return stops
            }



            


        }


}