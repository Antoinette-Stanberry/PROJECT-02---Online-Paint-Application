/* NOTE
- this function acts as a tool to draw straight lines on the canvas
- it also has the functionality that enables the user to preview what
they draw before it is fixed onto the canvas
*/
// -----------------------------------------------------------------------------------//

function LineToTool()
{
    
    //set an icon and a name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

    //create & set variable startMouseX to -1
	var startMouseX = -1;
    
    //create & set variable startMouseY to -1
	var startMouseY = -1;
    
    //set drawing to true
	var drawing = false;
    
    //create a slider
    var lineWeightSlider  = createSlider(1, 50, 3);
    lineWeightSlider.parent("#lineWeightControl");
    
    //set the slider's position
    lineWeightSlider.position(870, 695);
      
    //create a button called 'Line LineWeight'
    var button1 = createButton('Line LineWeight');
    
    //set the button's position
    button1.position(880, 650);

	//create a draw function  
	this.draw = function()
    {
            
        //only draw when mouse is clicked
		if(mouseIsPressed)
        {  
		
            //set the strokeWeight to the sliders' value
            strokeWeight(lineWeightSlider.value());
            
            //create a button called that tracks & dsiplays the slider's value over 50
            var button2 = createButton(lineWeightSlider.value() + "/50");
            
            //set the button's position
            button2.position(915, 675);
            
            //if it's the start of drawing a new line
			if(startMouseX == -1)
            {
                
                //set startMouseX to mouseX
				startMouseX = mouseX;
                
                //set startMouseY to mouseY
				startMouseY = mouseY;
                
                //set drawing to true
				drawing = true;
                
				//save the current pixel Array
				loadPixels();
                
			}

            //if the above returns false
			else
            {
                
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
                
				//draw the line
				line(startMouseX, startMouseY, mouseX, mouseY);
                
			}
		}

        //(if drawing is true)
		else if(drawing)
        {
            
			//save the pixels with the most recent line and reset the
			// - drawing bool and start locations
			loadPixels();
            
            //set drawing to true
			drawing = false;
            
            //set startMouseX to -1
			startMouseX = -1;
            
            //set startMouseY to -1
			startMouseY = -1;
            
		}
	};
}