var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        var tree;
        var buildings = [];
        // TODO (several):
        
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, canvasHeight - 395, 'blue'); //Creates a blue rectangle for the sky
            background.addChild(backgroundFill); //Adds the sky to the scene

            var groundFill = draw.rect(canvasWidth, canvasHeight - groundY, "gray"); //Creates a gray rectangle for the ground
            groundFill.x = 0; //Sets the ground's x position
            groundFill.y = groundY; //Sets the ground's y position
            background.addChild(groundFill); //Adds the ground to the scene

            // TODO 2: - Add a moon and starfield
            for (var i = 0; i < 100; i++) { //Loops 100 times (0-99)
                var circle = draw.circle(1, "white", "LightGray", 1); //Creates a small white circle for a star
                circle.x = canvasWidth * Math.random(); //Randomizes the x position of the star
                circle.y = groundY * Math.random(); //Randomizes the y position of the star
                background.addChild(circle); //Adds the star to the background
            }

            var moon = draw.bitmap("img/moon.png"); //Creates a bitmap image for the moon
            moon.x = 70; //Sets the moon's x position
            moon.y = -12; //Sets the moon's y position
            moon.scaleX = 1.0; //Sets the moon's horizontal scale
            moon.scaleY = 1.0; //Sets the moon's vertical scale
            background.addChild(moon); //Adds the moon to the background

            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why? A: So the buildings render behind the trees?
            for (var i = 0; i < 4; ++i) { //Loops 4 times (0-3)
                var buildingColors = ["red", "blue", "orange", "grey", "pink"]; //Defines an array of possible building colors
                var buildingHeight = 300 * Math.random(); //Randomizes the building height
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1); //Creates a building rectangle
                building.x = 200 * i; //Sets the building's x position
                building.y = groundY - buildingHeight; //Sets the building's y position so it sits on the ground
                background.addChild(building); //Adds the building to the scene
                buildings.push(building); //Stores the building in the buildings array
            }

            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); //Creates a bitmap image for the tree
            tree.x = 100; //Sets the tree's x position
            tree.y = 170; //Sets the tree's y position
            background.addChild(tree); //Adds the tree to the background

            } // end of render function - DO NOT DELETE


            function update() {
                // useful variables
                var canvasWidth = app.canvas.width; //Gets the canvas width
                var canvasHeight = app.canvas.height; //Gets the canvas height
                var groundY = ground.y; //Gets the ground's y position

                // TODO 3: Part 2 - Move the tree!
                tree.x = tree.x - 1; //Moves the tree to the left by 1

                if (tree.x < -200) { //If the tree moves off screen
                    tree.x = canvasWidth; //Resets the tree's position to the right
                }

                // TODO 4: Part 2 - Parallax
                for (var i = 0; i < buildings.length; i++) { //Loops through each building
                    var building = buildings[i]; //Gets the current building
                    building.x -= 1; //Moves the building to the left by 1
                    if (building.x < -100) { //If the building moves off screen
                        building.x = canvasWidth; //Resets the building's position to the right
                    }
                }
            } // end of update function - DO NOT DELETE

            background = new createjs.Container(); //Creates a container for the background
            background.resize = render; 
            background.update = update; 

            app.addResizeable(background); //Makes the background resizable
            app.addUpdateable(background); //Makes the background updateable

            render(); //Calls the render function 
            return background; //Returns the background container

    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
