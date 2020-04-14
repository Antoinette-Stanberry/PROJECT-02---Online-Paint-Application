/*NOTE
- this extension gives the option of changing the background of the 
cnavas to a different color.
- can be used in partnership with the colourPalette() function and colourTool() 
extension.
- if used with the colourTool extension, clicking on the canvas once, will give
off a filtered look, and multiple clicks will keep layering the filter until
it is completely opaque
*/
// -----------------------------------------------------------------------------------//

function paintBucketTool() 
{
    
    //set an icon and a name for the object
    this.icon = "assets/paintBucket.jpg";
    this.name = "paintbucket";

    //create a draw function
    this.draw = function() 
    {
    
        //checks if the mouse's x & y position are between certain boundries
        if(mouseX < 900 && mouseX > 0 && mouseY < 500 && mouseY > 0)
        {
            
            //checks if the mouse is pressed
            if(mouseIsPressed)
            {
                
                //draw a rectangle 
                // - set the postion 0, 0
                // - set the width to 1500 & height to 600
                rect(0, 0, 1500, 600);
                
            }
        }
    }
};