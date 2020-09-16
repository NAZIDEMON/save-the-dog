function obstacles () {
    tree = createSprite(100,240,14,14);
    tree.addImage("tree",treeImg);
    tree.velocityX = 2;

    rock = createSprite(50,200,18,18);
    rock.addImage("rock",rockImg);
    rock.velocityX = 2;
    
    mushroom = createSprite(550,170,18,18);
    mushroom.addImage("mushroom",mushroomImg);
    mushroom.velocityX = 2;
    
    getout = createSprite(240,100,18,18);
    getout.addImage("getout",getoutImg);
    getout.velocityX = 2;

    gaddha = createSprite(300,600,18,18);
    gaddha.addImage("gaddha",gaddhaImg);
    gaddha.velocityX = 2;

    turtle = createSprite(340,900,18,18);
    turtle.addImage("turtle",turtleImg);
    turtle.velocityX = 2;


}