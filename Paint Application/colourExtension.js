/* NOTE
- this support extension aims to assist the the colourTool() extension with 
choosing between selected color options to the user's discretion
- all the images are saved within the assets folder
*/
// -----------------------------------------------------------------------------------//

function colourExtension() 
{
    
    //create variables that call upon the pictures from the assets folder    
    var rgbG = './assets/rgb.png';
    var redG = './assets/redGradient.png';
    var greenG = './assets/greenGradient.png';
    var blueG = './assets/blueGradient.png';
    var greyG = './assets/greyGradient.png';

    //create an array that holds the images
    var colourGradient = [rgbG, redG, greenG, blueG, greyG];
    
    //the preload function will preload the images
    function preload() 
    {
        
        //img loads the images
        img = loadImage(rgbB);
        img = loadImage(redG);
        img = loadImage(greenG);
        img = loadImage(blueG);   
        img = loadImage(greyG);
        
    }
  
    //create a drop box of options 
    sel2 = createSelect();
    
    //set the position of the drop box
    sel2.position (1370, 650);
    
    //create the options for the user to choose from
    sel2.option("Color Options");
    sel2.option("RGB Scale (Default)");
    sel2.option("Red Scale");
    sel2.option("Blue Scale");               
    sel2.option("Green Scale");
    sel2.option("Grey Scale");
    
    //call upon the mySelectEvent2 function 
    sel2.changed(mySelectEvent2);
    
    //the mySelectEvent2 function will deal with changing between the selected options
    function mySelectEvent2() 
    {
        //sets a new variable that holds the selection value
        let item = sel2.value();
        
        //checks if the selected value is equal to the chosen strings
        if(item == "Color Options" || "RGB Scale (Default)")
        {
                
            //loads the appropriate image from the colourGradient array
            img = loadImage(colourGradient[0]);
                
        }
        
        //checks if the selected value is equal to the chosen string
         if(item == "Red Scale")
        {
                
            //loads the appropriate image from the colourGradient array
            img = loadImage(colourGradient[1]);
                
        }
        
        //checks if the selected value is equal to the chosen string
        if(item == "Green Scale")
        {
                
            //loads the appropriate image from the colourGradient array
            img = loadImage(colourGradient[2]);
                
        }
        
        //checks if the selected value is equal to the chosen string
        if(item == "Blue Scale")
        {
                
            //loads the appropriate image from the colourGradient array
            img = loadImage(colourGradient[3]);
                
        }
        
        //checks if the selected value is equal to the chosen string
        if(item == "Grey Scale")
        {
                
            //loads the appropriate image from the colourGradient array
            img = loadImage(colourGradient[4]);
                
        }
    }
}