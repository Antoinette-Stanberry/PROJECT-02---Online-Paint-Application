/* NOTE
- this tool is used to add a dynamic twist to everyday shapes
- the user starts off with a square that can be modified by the
implented sliders to chnage into a rectangle, an oval or an ellipse

*/
// -----------------------------------------------------------------------------------------------//

//set dragging to false
var dragging = false;

//set variables to be used later on
var w, h, e;
var offsetX, offsetY;
var x, y;


function basicShapesTool()
{
    
    //set an icon and a name for the object
    this.icon = "assets/shapes.png";
    this.name = "basicShapesTool";
    
    //create a slider for the width
    var shapeWidthSlider = createSlider(10, 500, 50);
    shapeWidthSlider.parent("#widthOfShapeControl"); 
    
    //create a slider for the height
    var shapeHeightSlider = createSlider(10, 500, 50);
    shapeHeightSlider.parent("#heightOfShapeControl");
    
    //create a slider for the edge
    var shapeEdgeSlider = createSlider(0, 400, 0);
    shapeEdgeSlider.parent("#edgeOfShapeControl");
    
    //set the sliders' positions
    shapeWidthSlider.position(700, 770);
    shapeHeightSlider.position(870, 770);
    shapeEdgeSlider.position(1035, 770);
    
    //create a button called 'Shape Width'
    button1 = createButton('Shape Width');
    
    //set the button's position    
    button1.position(720, 725);
    
    //create a button called 'Shape Height'
    button2 = createButton('Shape Height');
    
    //set the button's position    
    button2.position(890, 725);
    
    //create a button called 'Shape Edge'
    button3 = createButton('Shape Edge');
    
    //set the button's position    
    button3.position(1055, 725);
    
    
    this.draw = function()
    {

        //set w to the value of the slider's value
        w = shapeWidthSlider.value();
        
        //set h to the value of the slider's value
        h = shapeHeightSlider.value();
        
        //set e to the value of the slider's value
        e = shapeEdgeSlider.value();
            
        //checks if the mouse is pressed
        if(mouseIsPressed)
        {
            
            //create a button called that tracks & dsiplays the slider's value over 500
            var button1w = createButton(w + "/500");
            
            //set the button's position 
            button1w.position(735, 750);
            
            //create a button called that tracks & dsiplays the slider's value over 500
            var button2h = createButton(h + "/500");
            
            //set the button's position 
            button2h.position(905, 750);
            
            //create a button called that tracks & dsiplays the slider's value over 400
            var button3e = createButton(e + "/400");
            
            //set the button's position 
            button3e.position(1070, 750);
            
            //draw a rectangle 
            // - set the postion to mouseX and mouseY
            // - set the width & height to 50
            // - set the edge value to 10 - creates slightly curved edges
            rect(mouseX, mouseY, w, h, e);
       
            //set offsetX to x minus mouseX
            offsetX = x - mouseX;
            
            //set offsetY to y minus mouseY
            offsetY = y - mouseY;
            
            //call the mouseDragged function
            mouseDragged();
            
            //call the mouseReleased function
            mouseReleased();
            
        }
        
        //mouseDragged function
        function mouseDragged()
        {
                                
            //set x to mouseX plus offsetX                    
            x = mouseX + offsetX;
            
            //set x to mouseX plus offsetX  
            y = mouseY + offsetY;                        
                                
        }
                
        //mouseReleased function
        function mouseReleased()
        {
            
            //set mouseDragged to false
            mouseDragged = false;
                                                            
        }
    } 
}