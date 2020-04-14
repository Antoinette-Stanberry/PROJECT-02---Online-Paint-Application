/*NOTE
- this function acts as a tool that gives off the illusion of a spray can 
being used on the  canvas
- with the added slider, the user can change the size to thier discretion
- holding down on the mouse in one place will fill in the area completely
*/
// -----------------------------------------------------------------------------------//

function SprayCanTool()
{
	
    //set an icon and a name for the object
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";
    
    //create and set variable points to 13
	var points = 13;
    
    //create and set variable spread to 10
	var spread = 10;
    
    //create a slider
    var SprayCanlineWeightSlider  = createSlider(1, 50, 3);
    SprayCanlineWeightSlider.parent("#SClineWeightControl");
    
    //set the slider's position
    SprayCanlineWeightSlider.position(1035, 695);
    
    //create a button called 'SprayCan LineWeight'
    button = createButton('SprayCan LineWeight');
    
    //set the button's position
    button.position(1030, 650);

    //create a draw function
	this.draw = function()
    {
        
        //create and set variable to a random value between 5 & 10
		var r = random(5,10);
        
        //checks if the mouse is pressed
		if(mouseIsPressed)
        {
            
            //set the strokeWeight to the sliders' value
            strokeWeight(SprayCanlineWeightSlider.value());
            
            //create a button called that tracks & dsiplays the slider's value over 50
            var button2 = createButton(SprayCanlineWeightSlider.value() + "/50");
            
            //set the button's position
            button2.position(1085, 675);
            
            //for statement
            // - set var i to 0, check if it is less than points' value, increase i by 1
			for(var i = 0; i < points; i++)
            {
                
                //set the specifications for point
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
                
			}
		}
	};
}