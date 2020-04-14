/* NOTE
- this function handles all Jquery click events, and makes for
a smoother user interaction with the canvas.
*/
// -----------------------------------------------------------------------------------//

function HelperFunctions() 
{

	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() 
    {
        
        //sets the background color to white
		background(255, 255, 255);
        
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
        
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() 
    {
        
		saveCanvas("myPicture", "jpg");
        
	});
}