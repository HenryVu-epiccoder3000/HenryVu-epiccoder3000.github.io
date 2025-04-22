var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createObstacle(x, y, hitSize, hitDamage) { //Declares a function named createobstacle that has 2 parameters, x and y. 
      var hitZoneSize = hitSize; //Decalres a variable named hitZoneSize that stores a value corelating to the hit zone's size
      var damageFromObstacle = hitDamage; //Declares a variable that specifies the amount of damage taken from the obstacle.
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); 
      obstacleHitZone.x = x; //sets the x coordinates of the sawbalde
      obstacleHitZone.y = y; //sets the y cordinates of the obstacle
      game.addGameItem(obstacleHitZone); //adds the obstacle hitbox to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); //draws the image bitmap and stores it
      obstacleHitZone.addChild(obstacleImage); //attatches the image to the obstacle hitzone
      obstacleImage.x = -25; //positions the image to the hitbox's value by moving it to the left by 25 units
      obstacleImage.y = -25; //positions the iamge to the hitbox's value by moving it up by 25 units
      obstacleHitZone.rotationalVelocity = 10;
    }
    
    /*
    createObstacle(300, groundY -120, 25, 30);
    createObstacle(900, groundY -120, 25, 30); 
    createObstacle(1300, groundY -120, 25, 100);  
    createObstacle(1700, groundY -120, 25, 50); 
    createObstacle(2400, groundY -120, 25, 30); 
    */

    function createEnemy(x, y, imagePath = null) { //Makes a function called createEnemy with x, y, and an optional image
      var enemy = game.createGameItem("enemy", 25); //Makes a new enemy with a size of 25
      var visual; //Makes a variable for what the enemy looks like
    
      if (imagePath) { //If there is an image path
        visual = draw.bitmap(imagePath); //Use the image
      } else {
        visual = draw.rect(50, 50, "red"); //If not, use a red square
      }
    
      visual.x = -40; //Moves the image left a little
      visual.y = -75; //Moves the image up a little
      enemy.addChild(visual); //Puts the image on the enemy
      enemy.x = x; //Sets the enemy’s x spot
      enemy.y = y; //Sets the enemy’s y spot
      game.addGameItem(enemy); //Adds the enemy to the game
      enemy.velocityX = -1; //Moves the enemy to the left
    
      enemy.onPlayerCollision = function () { //When the player touches the enemy
        game.changeIntegrity(-50); //Take away 50 health
      };
      enemy.onProjectileCollision = function () { //When a projectile hits the enemy
        game.increaseScore(100); //Add 100 points
        enemy.fadeOut(); //Make the enemy fade away
      };
    }

    
    /*
    createEnemy(400, groundY - 50);
    createEnemy(800, groundY - 50);
    createEnemy(1200, groundY - 50);
    */
    
    function createReward(x, y, health, imagePath = null) { //Makes a function called createReward with x, y, health, and an optional image
      var reward = game.createGameItem("reward", 25); //Makes a reward with a size of 25
      var visual = imagePath ? draw.bitmap(imagePath) : draw.rect(50, 50, "yellow"); //Uses the image if there is one, or makes a yellow square
    
      visual.x = -25; //Moves the image left a bit
      visual.y = -75; //Moves the image up a bit
      reward.addChild(visual); //Puts the image on the reward
      reward.x = x; //Sets the reward’s x spot
      reward.y = y; //Sets the reward’s y spot
      game.addGameItem(reward); //Adds the reward to the game
      reward.velocityX = -3; //Moves the reward to the left
    
      reward.onPlayerCollision = function () { //When the player touches the reward
        game.increaseScore(50); //Adds 50 points
        game.changeIntegrity(health); //Gives the player some health
        reward.fadeOut(); //Makes the reward fade away
      };
    }

    
    //createReward(500, groundY - 100, 30)
    

    function createLevel(x, y, speed, imagePath = null) { //Makes a function called createLevel with x, y, speed, and an optional image
      var level = game.createGameItem("level", 25); //Makes a level item with a size of 25
      var visual = imagePath ? draw.bitmap(imagePath) : draw.rect(50, 50, "pink"); //Uses the image if there is one, or makes a pink square
    
      visual.x = -25; //Moves the image left a bit
      visual.y = -25; //Moves the image up a bit
      level.addChild(visual); //Puts the image on the level item
      level.x = x; //Sets the level’s x spot
      level.y = y; //Sets the level’s y spot
      game.addGameItem(level); //Adds the level to the game
      level.velocityX = -speed; //Moves the level to the left by the speed
    
      level.onPlayerCollision = function () { //When the player touches the level
        level.shrink(); //Makes the level item shrink
        startLevel(); //Starts the next level
      };
    }


    function createMarker() {

    }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; //fetches current level and stores it in level var
      var levelObjects = level.gameItems // fetches gameItems and stores it in var levelObejcts

      for (var i = 0; i < levelObjects.length; i++) {
        var element = levelObjects[i];
      
        if (element.type === "sawblade") {
          createObstacle(element.x, element.y, element.hitSize, element.hitDamage);
        } 
        else if (element.type === "enemy") {
          createEnemy(element.x, element.y, element.image);
        } 
        else if (element.type === "reward") {
          createReward(element.x, element.y, element.health, element.image);
        }
        else if (element.type === "level") {
          createLevel(element.x, element.y, element.speed, element.image);
        }
      }

      ////////////////////////////////////
      /// DO NOT EDIT CODE BELOW HERE! ///
      ////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
