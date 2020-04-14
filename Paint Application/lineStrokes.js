/*NOTE
- this support extension aims to provide more options when dealing 
with the lines' strokes of the freehandTool(), lineToTool(), mirrorDrawTool(), &
basicShapesTool()
*/
// -----------------------------------------------------------------------------------//

//set variable to be used later on
var item1;

function lineStrokes() 
{
    
    // create variables that create and hold different line
    //segments
    var line01 = [5, 15];
    var line02 = [5, 50];
    var line03 = [1, 25];
    var line04 = [20, 10, 10, 10, 10, 10, 10, 10];
    var line05 = [];

    //create an array that holds the lines
    var lines = 
        [
            
            line01, line02, line03, line04, line05
            
        ];

    //create a drop box of options
    sel1 = createSelect();
    
    //set the position of the drop box
    sel1.position(515, 710);
    
    //create the options for the user to choose from
    sel1.option("Line Types");
    sel1.option('Normal (Default)');
    sel1.option('Dash 1: -------');
    sel1.option('Dash 2: - - - - -');
    sel1.option('Dash 3: . . . . .');
    sel1.option('Dash 4: --  -   --   -');
    
    //call upon the mySelectEvent2 function 
    sel1.changed(mySelectEvent1);
    
    //call upon the mySelectEvent2 function 
    function mySelectEvent1() 
    {
        
        //sets a new variable that holds the selection value
        item1 = sel1.value();
    
        //checks if the selected value is equal to the chosen string
        if(item1 == 'Normal (Default)')
        {
               
            //sets the line dash to the appropriate value
            drawingContext.setLineDash(lines[4]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(item1 == 'Dash 1: -------')
        {
        
            //sets the line dash to the appropriate value
            drawingContext.setLineDash(lines[0]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(item1 == 'Dash 2: - - - - -')
        {
        
            //sets the line dash to the appropriate value
            drawingContext.setLineDash(lines[1]);
        
        }
    
        //checks if the selected value is equal to the chosen string
        if(item1 == 'Dash 3: . . . . .')
        {
        
            //sets the line dash to the appropriate value
            drawingContext.setLineDash(lines[2]);
        
        }
    
        //checks if the selected value is equal to the chosen string
        if(item1 == 'Dash 4: --  -   --   -')
        {
        
            //sets the line dash to the appropriate value
            drawingContext.setLineDash(lines[3]);
            
        }    
    }
}