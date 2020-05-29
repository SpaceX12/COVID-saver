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
    canvas = createCanvas(displayWidth, displayHeight);
    a = createSprite(displayWidth/2, displayHeight/2);
    a.addImage(roadImg);
    a.y = -2950;
    console.log(displayHeight);
    //a.debug = true;
    a.scale = 4.5;
    console.log(a.height);


    a.velocityY = 4;

    b = createSprite(10, 50);
    b.addImage(person1Img);

    b.debug = true;
    b.scale = 0.15;

    c = createSprite(110, 50);
    c.addImage(person2Img);

    c.debug = true;
    c.scale = 0.15;

    d = createSprite(210, 50);
    d.addImage(person3Img);

    d.debug = true;
    d.scale = 0.1;

    e = createSprite(300, 50);
    e.addImage(potholeImg);

    e.debug = true;
    e.scale = 0.15;
    e.setCollider("circle", 0, 0, e.width/2-30);

    f = createSprite(400, 50);
    f.addImage(barrierImg);

    f.debug = true;
    f.scale = 0.2;

    g = createSprite(500, 770);
    g.addImage(carImg);

    g.debug = true;
    g.scale = 0.7;
    g.setCollider("rectangle", 0, 0, g.width-70, g.height-36);

}

function draw(){
    background(0);

    //console.log(a.y);

    if(a.y>0){
        a.y = -2800;
    }
    
    drawSprites();
}
