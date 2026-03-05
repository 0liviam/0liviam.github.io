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
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300,600,200,50);
    createPlatform(100,700,50,50);
    createPlatform(700,500,200,50);
    createPlatform(950,300,75,50);
    createPlatform(1200,300,200,50);
    createPlatform(1100,400,50,50);
    createPlatform(600,500,200,50);
    createPlatform(400,400,50,50);
    createPlatform(200,300,100,75);
    createPlatform(300,175,200,25);
    createPlatform(600,270,260,25);
    createPlatform(400,600,200,50);
    createPlatform(400,600,200,50);
    // TODO 3 - Create Collectables
createCollectable("diamond", 100, 600,0.5,0.7);
createCollectable("max", 400, 500, 0, 0.7);
createCollectable("database", 700, 400, 0, 0.7);
createCollectable("grace", 400, 350, 0, 0.7);
createCollectable("kennedi", 800, 150, 0, 0.7);
  createCollectable("steve", 1350, 200);
// TODO 4 - Create Cannons

createCannon("top", 200, 2000);
createCannon("right", 550, 2000);
  
createCannon("left", 300, 2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
