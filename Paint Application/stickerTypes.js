/* NOTE
- this support extension is to be used in partnerhsip with the
stickerTool() function
- this extension adds multiple sticker options and allows the user
to insert an image file of their own to use as a sticker (scroll down 
on canvas to access prompt)
- when inserting an image be sure to choose the file again 
when alternating between the stickers
- some extra stickers are in assets to input! (dinosaurs)
*/
// -----------------------------------------------------------------------------------//

//set variable to be used later on
let userFile;

function stickerTypes() 
{

    //create variables that call upon the pictures from the assets folder
    var peach = './assets/sticker001.png';
    var pear = './assets/sticker002.png';
    var strawberry = './assets/sticker003.png';
    var orange = './assets/sticker004.png';
    var apple = './assets/sticker005.png';
    var banana = './assets/sticker006.png';
    var cherry = './assets/sticker007.png';
    var grape = './assets/sticker008.png';
    var watermelon = './assets/sticker009.png';
    
    //create a variable that creates a file input
    // - call the file function
    var userFile = createFileInput(file);

    //create an array that holds the images & the file input
    var stickerType = 
        [
            peach, pear, strawberry, orange, apple, banana, cherry, grape, watermelon, userFile
        ];
    
    //create a drop box of options
    sel = createSelect();
    
    //set the position of the drop box
    sel.position (515, 680);
    
    //create the options for the user to choose from
    sel.option("Sticker Types (fruits)");
    sel.option("Peach (Default)");
    sel.option("Pear");
    sel.option("Strawberry");
    sel.option("Orange");
    sel.option("Apple");
    sel.option("Banana");
    sel.option("Cherry");
    sel.option("Grape");
    sel.option("Watermelon");
    sel.option("Insert File");

    //call upon the mySelectEvent function 
    sel.changed(mySelectEvent);
    
    //the mySelectEvent function will deal with changing between the selected options
    function mySelectEvent() 
    {
        
        //sets a new variable that holds the selection value
        let item = sel.value();
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Peach (Default)")
        {
            
            //loads the appropriate image from the stickerType array
            sticker = loadImage(stickerType[0]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Pear")
        {
            
            //loads the appropriate image from the stickerType array
            sticker = loadImage(stickerType[1]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Strawberry")
        {
            
            //loads the appropriate image from the stickerType array
             sticker = loadImage(stickerType[2]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Orange")
        {
            
            //loads the appropriate image from the stickerType array
            sticker = loadImage(stickerType[3]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Apple")
        {
            
            //loads the appropriate image from the stickerType array
            sticker = loadImage(stickerType[4]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Banana")
        {
            
            //loads the appropriate image from the stickerType array
            sticker = loadImage(stickerType[5]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Cherry")
        {
            
            //loads the appropriate image from the stickerType array
            sticker = loadImage(stickerType[6]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Grape")
        {
            
            //loads the appropriate image from the stickerType array
            sticker = loadImage(stickerType[7]);
            
        }
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Watermelon")
        {
            
            //loads the appropriate image from the stickerType array
            sticker = loadImage(stickerType[8]);
                
        }
        
        //checks if the selected value is equal to the chosen string
        if(sel.value() == "Insert File")
        {
            
            //loads the appropriate image from the stickerType array
            sticker = loadImage(stickerType[9]);
            
        }
    }
    
    //calls the file function
    function file(userF)
    {
        
        //prints the userF file to the console
        print(userF);
        
        //checks if the file type is an image
        if(userF.type === "image")
        {
            
            //displays the name (data) of the image
            sticker = createImg(userF.data, '');
            
            //hides the image
            sticker.hide();
            
        }
        
        //if the above returns false
        else
        {
            
            //sticker returns as null
            sticker = null;
            
        }
    }
}