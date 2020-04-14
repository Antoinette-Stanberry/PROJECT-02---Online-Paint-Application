/* NOTE
- this function handles the colour palette and its configurations
*/
// -----------------------------------------------------------------------------------//

function ColourPalette() 
{
    
	//a list of web colour strings
	this.colours = 
        
        [
        
        "black", "brown",  "maroon", "indigo", "tomato", "orange", "navy", "green", "olive", "white",
        "gray", "sienna", "red", "purple", "salmon", "gold", "blue", "teal", "lime", "seashell",
        "Silver", "tan", "crimson", "Plum", "pink", "yellow", "aqua", "aquamarine",  "fuchsia", "lavender",
  
	   ];
    
	//make the start colour be black
	this.selectedColour = "black";

    //create a new variable that is equal to 'this'
	var self = this;

    //create a new variable function
	var colourClick = function() 
    {
        
		//remove the old border
		var current = select("#" + self.selectedColour + "Swatch");
		current.style("border", "0");

		//get the new colour from the id of the clicked element
		var c = this.id().split("Swatch")[0];

		//set the selected colour and fill and stroke
		self.selectedColour = c;
		fill(c);
		stroke(c);

		//add a new border to the selected colour
		this.style("border", "2px solid white");
        
	}

	//load in the colours
	this.loadColours = function() 
    {
        
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.colours[0]);
		stroke(this.colours[0]);

		//for each colour create a new div in the html for the colourSwatches
		for (var i = 0; i < this.colours.length; i++) 
        {
            
			var colourID = this.colours[i] + "Swatch";

			//using JQuery add the swatch to the palette and set its background colour
			//to be the colour value.
			var colourSwatch = createDiv()
			colourSwatch.class('colourSwatches');
			colourSwatch.id(colourID);

			select(".colourPalette").child(colourSwatch);
			select("#" + colourID).style("background-color", this.colours[i]);
			colourSwatch.mouseClicked(colourClick)
            
		}
        
        //the color swatches and style are selected 
		select(".colourSwatches").style("border", "2px solid white");
        
	};
    
	//call the loadColours function now it is declared
	this.loadColours();
    
}