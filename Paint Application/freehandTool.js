/*NOTE
- this function acts as a pencil tool, where the user can 
draw to the canvas wihtout any restrictions
- to get more from this tool, utilize the constructor functions 
lineCaps() and lineStrokes() for more variations
- be sure to make use of the slider implemented below to increase the 
width of the line
*/
// -----------------------------------------------------------------------------------//

function FreehandTool()
{
    
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";

	//to smoothly draw we'll draw a line from the previous mouse location
	// - to the current mouse location. The following values store
	// - the locations from the last frame. They are -1 to start with because
	// - we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;
    
    //create a slider
    var FreeHandlineWeightSlider  = createSlider(1, 50, 3);
    FreeHandlineWeightSlider.parent("#FHlineWeightControl");
    
    //set the slider position
    FreeHandlineWeightSlider.position(700, 695);
    
    //create a button called 'FreeHand LineWeight'
    var button1 = createButton('FreeHand LineWeight');
    
    //set the button's position
    button1.position(695, 650);
    
    //create a draw function 
	this.draw = function()
    {
        
		//if the mouse is pressed
		if(mouseIsPressed)
        {
            
            //set the strokeWeight to the sliders' value
            strokeWeight(FreeHandlineWeightSlider.value());
            
            //create a button called that tracks & dsiplays the slider's value over 50
            var button2 = createButton(FreeHandlineWeightSlider.value() + "/50");
            
            //set the button's position
            button2.position(745, 675);
            
			//check if they previousX and Y are -1. 
            // - sets them to the current mouse X and Y if they are.
			if (previousMouseX == -1)
            {
                
                //set previousMouseX to mouseX
				previousMouseX = mouseX;
                
                //set previousMouseY to mouseY
				previousMouseY = mouseY;
                
			}
            
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else
            {
                
                //draw a line from position (previousMouseX, previousMouseY) to
                //position (mouseX, mouseY)
				line(previousMouseX, previousMouseY, mouseX, mouseY);
                
                //set previousMouseX to mouseX
				previousMouseX = mouseX;
                
                //set previousMouseY to mouseY
				previousMouseY = mouseY;
                
			}
		}
        
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else
        {
            
            //set previousMouseX to -1
			previousMouseX = -1;
            
            //set previousMouseY to -1
			previousMouseY = -1;
            
		}
	};
}