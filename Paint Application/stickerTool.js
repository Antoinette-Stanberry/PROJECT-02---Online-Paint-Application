/*NOTE
- this extension is to provide the user with an option to add stickers
to the canvas
- this extension is also equipped with a slider to change the size of
the sticker
*/
// -----------------------------------------------------------------------------------//

//set variables to be used later on
var sticker;
var stickerX;
var stickerY;
var stickerSize;

function stickerTool() 
{
    
    //set an icon and a name for the object
    this.icon = "assets/stickers.jpg";
	this.name = "sticker";
    
    //create a slider
    var stickerSizeSlider = createSlider(10, 125, 25);
    stickerSizeSlider.parent("#sizeOfStickerControl"); 
    
    //set the slider's position
    stickerSizeSlider.position(1200, 695);
      
    //create a button called 'Sticker Size'
    button = createButton('Sticker Size');
    
    //set the button's position
    button.position(1210, 650);
    
    //sets sticker to call upon the sticker from the assets folder
    sticker = loadImage('./assets/sticker001.png');
    
    //create a draw function
    this.draw = function() 
    {

        //checks if the mouse is pressed
        if(mouseIsPressed) 
        {
            
            //checks if the mouse is between the chosen dimensions
            if(mouseX < 1500, mouseX > 0);
            {

                //set the sticker's size to the sliders' value 
                stickerSize = stickerSizeSlider.value();    
                 
                //create a button called that tracks & dsiplays the slider's value over 125
                var button2 = createButton(stickerSizeSlider.value() + "/125");
            
                //set the button's position
                button2.position(1225, 675);
                
                //set stickerX to mouseX  minus the stickers' size divided by 2
                stickerX = mouseX - stickerSize/2;
                
                //set stickerX to mouseX  minus the stickers' size divided by 2
                stickerY = mouseY - stickerSize/2;

                //draw the chosen image
                // - choose the sticker
                // - set the position to stickerX, stickerY
                // - set the width & length to stickerSize
                image(sticker, stickerX, stickerY, stickerSize, stickerSize);
         
            }
        }
    }   
};