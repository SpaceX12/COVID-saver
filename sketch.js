var carImg, person1Img, person2Img, person3Img, potholeImg, barrierImg, roadImg;

function preload(){
    carImg = loadImage("Images/Ambulance.png");
    person1Img = loadImage("Images/Guy.png");
    person2Img = loadImage("Images/patient1.png");
    person3Img = loadImage("Images/patient2.png");
    potholeImg = loadImage("Images/pthhole.png");
    barrierImg = loadImage("Images/Barrier.png");
    roadImg = loadImage("Images/Road.PNG");
}

function setup(){
    canvas = createCanvas(windowWidth - 10, windowHeight - 8);
    a = createSprite(windowWidth/2, windowHeight/2);
    a.addImage(roadImg);
    a.y = windowWidth-(a.height/2)
    console.log(windowHeight);
    //a.debug = true;
    a.scale = 4.3;

    b = createSprite(10, 50);
    b.addImage(person1Img);

    b.debug = true;
    b.scale = 0.35;

    c = createSprite(110, 50);
    c.addImage(person2Img);

    c.debug = true;
    c.scale = 0.23;

    d = createSprite(210, 50);
    d.addImage(person3Img);

    d.debug = true;
    d.scale = 0.21;

    e = createSprite(300, 50);
    e.addImage(potholeImg);

    e.debug = true;
    e.scale = 0.28;
    e.setCollider("circle", 0, 0, e.width/2-30);

    f = createSprite(400, 50);
    f.addImage(barrierImg);

    f.debug = true;
    f.scale = 0.4;

    g = createSprite(500, displayHeight);
    g.addImage(carImg);

    g.debug = true;
    //g.scale = 0.4;
    g.setCollider("rectangle", 0, 0, g.width-70, g.height-36);

}

function draw(){
    background(0);

    camera.position.x = windowWidth/2;
    //camera.position.y = g.y;

    if(keyDown(UP_ARROW)){
        //g.setVelocity(0, -25);
        a.velocityY  = -25;

    }else if(keyDown(RIGHT_ARROW)){
        g.setVelocity(10, -25);

    }else if(keyDown(LEFT_ARROW)){
        g.setVelocity(-10, -25);
    }


    drawSprites();
}