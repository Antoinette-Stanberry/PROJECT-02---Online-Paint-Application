/* NOTE
- this extension aims to incorporte a bit more functionality as 
a 'previous action' operation does not curently exist
- this extension allows for mistakes to be simply erased by a 
white eraser whose size can be chnaged to the user's discretion
*/
// -----------------------------------------------------------------------------------//

//create variables to be used later on
var x2 = null;
var y2 = null;

function eraserTool() 
{

    //set an icon and a name for the object
    this.icon = "assets/eraser.png";
    this.name = "eraser";
    
    //create a slider
    var ElineWeightSlider = createSlider(10, 100, 50);
    ElineWeightSlider.parent("#ElineWeightControl");

    //set the slider's position    
    ElineWeightSlider.position(1200, 770);

    //create a button called 'Eraser Size'
    button = createButton('Eraser Size');
    
    //set the button's position    
    button.position(1220, 725);

    //create a draw function   
    this.draw = function() 
    {
        
        //if the mouse is pressed
        if(mouseIsPressed) 
        {
            
            //set x2 to the value of the slider's value
            x2 = ElineWeightSlider.value();
            
            //set x2 to the value of the slider's value
            y2 = ElineWeightSlider.value();
            
            //create a button called that tracks & dsiplays the slider's value over 100
            var button2 = createButton(ElineWeightSlider.value() + "/100");
            
            //set the button's position
            button2.position(1235, 750);
            
            //set the fill color to white
            fill(255);
            
            //set no strokes
            noStroke();
            
            //draw a rectangle
            // - set the postion to mouseX and mouseY
            // - set the width to x2 & height to y2
            // - set the edge value to 15 - creates slightly curved edges
            rect(mouseX, mouseY, x2, y2, 15);
            
        }
    }

};