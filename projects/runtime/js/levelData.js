var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Intro",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 600, y: groundY - 20, hitSize: 25, hitDamage: 20 },
          { type: "sawblade", x: 1100, y: groundY - 20, hitSize: 25, hitDamage: 20 },
          { type: "enemy", x: 500, y: groundY - 120, image: "img/drone.png" },
          { type: "enemy", x: 700, y: groundY - 25, image: "img/police.png" },
          { type: "reward", x: 1450, y: groundY - 20, health: 30, image: "img/money.png" },
          { type: "level", x: 1700, y: groundY - 30, speed: 2, image: "img/car.png" }
        ]
      },
      {
        name: "ts crazy bro",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY - 20, hitSize: 25, hitDamage: 50 },
          { type: "sawblade", x: 1000, y: groundY - 20, hitSize: 25, hitDamage: 50 },
          { type: "enemy", x: 800, y: groundY - 120, image: "img/drone.png" },
          { type: "enemy", x: 500, y: groundY - 25, image: "img/police.png" },
          { type: "enemy", x: 1300, y: groundY - 25, image: "img/police.png" },
          { type: "reward", x: 1500, y: groundY - 20, health: 40, image: "img/money.png" },
          { type: "level", x: 1650, y: groundY - 30, speed: 3, image: "img/car.png" }
        ]
      },
      {
        name: "Night Chase",
        number: 3,
        speed: -4,
        gameItems: [
          
          { type: "sawblade", x: 800, y: groundY - 20, hitSize: 25, hitDamage: 40 },
          { type: "enemy", x: 950, y: groundY - 25, image: "img/police.png" },
          { type: "reward", x: 1550, y: groundY - 20, health: 35, image: "img/money.png" },
          { type: "level", x: 1800, y: groundY - 30, speed: 3, image: "img/car.png" }
        ]
      },
      {
        name: "Final Stretch",
        number: 4,
        speed: -5,
        gameItems: [
          { type: "sawblade", x: 300, y: groundY - 20, hitSize: 25, hitDamage: 60 },
          { type: "sawblade", x: 700, y: groundY - 20, hitSize: 25, hitDamage: 60 },
          //{ type: "enemy", x: 850, y: groundY - 25, image: "img/police.png" },
          { type: "enemy", x: 1150, y: groundY - 25, image: "img/police.png" },
          { type: "reward", x: 1400, y: groundY - 20, health: 50, image: "img/money.png" },
          { type: "level", x: 1700, y: groundY - 30, speed: 4, image: "img/car.png" }
        ]
      }
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
