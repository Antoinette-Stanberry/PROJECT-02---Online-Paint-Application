/* NOTE
- this extension is used to extend the current color options available in the 
colourPalette function.
- to properly use the tool, user must click within the image's boundries to activate, before 
switching between the color options
- this extension can only be used by the basicShapesTool & paintBucketTool
- if used by the paintBucketTool, the color will fill the canvas as a filter. Multiple
clicks will deepen the alpha (opacity) value of the color
- a reminder that this extension is also a tool, so it must be activated (clicked) for
usage each time.
*/
// -----------------------------------------------------------------------------------------------//

//set variables to be used later on
let img;
let c;
let a;

//the preload function will preload the images
function preload() 
{
    
    //img loads the image from the assets folder
    img = loadImage('./assets/rgb.png');
    
}

function  colourTool() 
{
    
    //set an icon and a name for the object
    this.icon = './assets/colours1.jpg';
    this.name = "colourTool";
    
    //create a button called "Alpha Value"
    button = createButton("Alpha Value");
    
    //set the button's position
    button.position(1400, 680);

    //create a radio selection of options
    radio2 = createRadio();
    
    //create the options for the user to choose from
    radio2.option("25");
    radio2.option("50");
    radio2.option("75");
    radio2.option("100");
    
    //set the position of the radio selection
    radio2.position(1405, 710);
    
    //set the style of the radio selection
    // - styled by width and 90 pixels apart
    radio2.style('width', '90px');
    
    //set the alignment of the text
    // - alignment - CENTER
    textAlign(CENTER);
    
    //call upon the myRadioEvent2 function
    radio2.changed(myRadioEvent2);
    
    //the myRadioEvent2 function will deal with changing between the selected options    
    function myRadioEvent2() 
    {

        //checks if the selected value is equal to the chosen string
        if(radio2.value() == "25") 
        {
            
            //alpha (opacity) value is set to 25
            a = 25;
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(radio2.value() == "50") 
        {
            
            //alpha (opacity) value is set to 50
            a = 50;
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(radio2.value() == "75") 
        {
          
            //alpha (opacity) value is set to 75
            a = 75;
            
        }
        
        //checks if the selected value is equal to the chosen string
        else if(radio2.value() == "100") 
        {
            
            //alpha (opacity) value is set to 100
            a = 100;
                   
        }
    }
    
    //create a draw function   
    this.draw = function() 
    {
        
        //set the strokeWeight to 2
        strokeWeight(2);
        
        //set the image's position
        image(img, 1300, 490, 150, 100);

        //if statement
        //checks if the mouse is pressed, and mouseX & mouseY are between the boundries (image's position)
        if(mouseIsPressed && mouseX < 1450 && mouseX > 1300 && mouseY < 590 && mouseY > 490) 
        {
            
            //c gets the color value underneath mouseX & mouseY's position
            c = get(mouseX, mouseY); 

        }
        
        //checks if the mouse is pressed
        if(mouseIsPressed) 
        {    
            
            //set the color values of variables r, g, & b
            let r = red(c);
            let g = green(c);
            let b = blue(c);
            //let a = 30;
            
            //set the fill color to variables' r, g, b, & a values
            fill(r, g, b, a);
            
            //set no stroke
            noStroke();
            
            //draw a rectangle 
            // - set the postion to mouseX and mouseY
            // - set the width & height to 50
            // - set the edge value to 10 - creates slightly curved edges
            rect(mouseX, mouseY, 50, 50, 10);

        }
        
        //checks if the mouse is pressed and if mouseX is less than 50
        if(mouseIsPressed && mouseX < 50) 
        {   
        
            //draw a rectangle where the image once was
            rect(1300, 490, 150, 100);
            
        } 
    }       
}