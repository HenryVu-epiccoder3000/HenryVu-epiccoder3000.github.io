$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(200, 700,150,10); 
    createPlatform(300, 570,150,10); 
    createPlatform(200, 470,70,10); 
    createPlatform(450, 100,10,650); 
    createPlatform(350, 340,100,10); 
    createPlatform(800, 270,100,10); 
    createPlatform(200, 220,100,10);
    createPlatform(700, 0,10,600); 
    createPlatform(1200, 400,200,2009); 
    createPlatform(900, 700,100,10); 
    createPlatform(750, 570,100,10); 
    createPlatform(950, 470,100,10); 
    createPlatform(1000, 370,50,10); 
    createPlatform(1050, 200,10,600);
    createPlatform(200, 0,10,470);
    createPlatform(1050, 200,100,10);
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("lunchly", 830, 50, 10, 0.5);
    createCollectable("prime", 435, 40, 10, 0.5);
    createCollectable("gloves", 230, 50, 10, 0.5);
    createCollectable("ksi", 630, 50, 10, 0.5);
    createCollectable("flag", 1290, 50, 10, 0.5);
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("top", 570, 2000);
    createCannon("top", 620, 2000);
    createCannon("top", 670, 2000);
    createCannon("top", 720, 2000);
    createCannon("left", 470, 2000);
    createCannon("left", 520, 2000);
    createCannon("bottom", 1120, 2000);
    createCannon("bottom", 1070, 2000);
    createCannon("bottom", 1020, 2000);


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
