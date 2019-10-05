
const stopsBetweenStations = function (Start_Line, Start_Station, End_Line, End_Station

    ){
    const Red ={
        Path:['South Station','Park Street','Kendall' ,'Central',"Harvard","Porter","Davis","Alewife"]
    }
    const  Green ={
       Path: ["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"]
    }
    const Orange={
      Path:  ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"]
    }
    const three_road=[Red,Green,Orange];

    let state ="null";
    let stops=null;
    let start_point;
    let end_point ;

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

        switch(state){

            case "same_line":
                {
                    start_point=three_road[three_road.indexOf(eval(Start_Line))].Path.indexOf(Start_Station)  ;   
                    end_point=three_road[three_road.indexOf(eval(End_Line))].Path.indexOf(End_Station)  ;      
                    return Math.abs(start_point-end_point)
                }
            case"in_place" :
                    return 0;

            case "two_line" :{

                let temp1,temp2;
                start_point=three_road[three_road.indexOf(eval(Start_Line))].Path.indexOf(Start_Station);   
                end_point=three_road[three_road.indexOf(eval(Start_Line))].Path.indexOf("Park Street");   
                
                temp1 = three_road[three_road.indexOf(eval(End_Line))].Path.indexOf(End_Station);  
                temp2 = three_road[three_road.indexOf(eval(End_Line))].Path.indexOf("Park Street");  
                
                stops = Math.abs(start_point-end_point) + Math.abs(temp1-temp2);
                debugger;
                return stops
            }



            


        }


}