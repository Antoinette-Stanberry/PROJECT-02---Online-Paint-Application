/*NOTE
- sets up the preliminary finctions and variable sto be used throughout the project
- setup is only called within this file
*/

//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

var liner = null;
var stickers = null;
var cap = null;
var coloursG = null;

function setup() 
{

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');

    var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);

	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
    
    liner = new lineStrokes();
    stickers = new stickerTypes();
    coloursG = new colourExtension();
    cap = new lineCaps();


	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
    //original tools
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
    
    //new tools
    toolbox.addTool(new basicShapesTool());
    toolbox.addTool(new stickerTool());
    toolbox.addTool(new eraserTool());
    toolbox.addTool(new paintBucketTool());
    toolbox.addTool(new colourTool());
          
    //set background color to white 
	background(255);

}

function draw() 
{
    
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
    
	if (toolbox.selectedTool.hasOwnProperty("draw")) 
    {
        
		toolbox.selectedTool.draw();
        
	} 
    
    else 
    {
        
		alert("it doesn't look like your tool has a draw method!");
        
	}
}