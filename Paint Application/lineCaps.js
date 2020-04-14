/*NOTE
- this support extension aims to provide more options when dealing 
with the strokes of the freehandTool(), lineToTool(), mirrorDrawTool(), &
basicShapesTool()
*/
// -----------------------------------------------------------------------------------//

//set variable to be used later on
var radio1;

function lineCaps() 
{

    //create a button called 'Line Caps'
    button = createButton('Line Caps');
    
    //set the button's position
    button.position(515, 740);
        
    //create a radio selection of options
    radio1 = createRadio();
    
    //create the options for the user to choose from
    radio1.option("Round");
    radio1.option("Square");
    
    //set the position of the radio selection
    radio1.position(590, 740);
    
    //set the style of the radio selection
    // - styled by width and 90 pixels apart
    radio1.style('width', '80px');
    
    //set the alignment of the text
    // - alignment - CENTER
    textAlign(CENTER);
    
    //call upon the myRadioEvent1 function
    radio1.changed(myRadioEvent1);
    
    //the myRadioEvent2 function will deal with changing between the selected options     
    function myRadioEvent1() 
    {
        
        //checksif the selected value is equal to the chosen string
        if(radio1.value() == "Round") 
        {
            
            //sets the strokeCap to ROUND
            strokeCap(ROUND);
            
        }
        
        //checks if the selected value is equal to the chosen string
        else if(radio1.value() == "Square") 
        {
            
            //sets the strokeCap to SQUARE
            strokeCap(SQUARE); 
            
        }
    }
}