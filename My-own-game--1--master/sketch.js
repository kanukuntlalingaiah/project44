var canvas;
var maze, left_boundary, right_boundary, bottom_boundary, top_boundary;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var player;
var trophy, trophyImg;

function preload(){
     pic = loadImage("maze.png");
    trophyImg = loadImage("trophy.png");
}

function setup(){
    var canvas = createCanvas(displayWidth - 30, displayHeight);


    right_boundary = createSprite(30, 150, 40, 6656 );
    left_boundary = createSprite(1300, 150, 40, 6656);


    trophy = createSprite(100, -1700, 50, 50);
    trophy.addImage(trophyImg);
    trophy.scale = 0.09;


    wall1 = createSprite(600, 535, 1200, 30);
    wall2 = createSprite(800, 455, 30, 150);
    wall3 = createSprite(800, 380, 250 ,30);
    wall4 = createSprite(670, 337, 30 ,115);
    wall5 = createSprite(920, 337, 30 ,115);
    wall6 = createSprite(545, 460, 30 ,130);
    wall7 = createSprite(1175, 390, 240 ,30);
    wall8 = createSprite(315, 380, 240 ,30);
    wall9 = createSprite(420, 320, 30 ,100);
    wall10= createSprite(480, 270, 150 ,30);
    wall11= createSprite(541, 200, 30 ,150);
    wall12= createSprite(350, 140, 375 ,30);
    wall13= createSprite(300, 210, 30 ,120);
    wall14= createSprite(100, 280, 140 ,30);
    wall15= createSprite(920, 275, 260 ,30);
    wall16= createSprite(800, 210, 30 ,150);
    wall17= createSprite(1050, 150, 30 ,280);
    wall18= createSprite(680, 85, 30 ,160);
    wall19= createSprite(740, 150, 100 ,30);
    wall20= createSprite(615, 20, 100 ,30);
    wall21= createSprite(177, 80, 30 ,120);
    wall22= createSprite(920, 80, 30 ,130);
    wall23= createSprite(1055, 25, 280 ,30);
    wall24= createSprite(1166, 205, 30 ,200);
    wall25= createSprite(1235, 120, 140 ,30);
    wall26= createSprite(235, 23, 140 ,30);
    wall27= createSprite(430, 17, 30 ,230);
    wall28= createSprite(800, -45, 30 ,180);
    wall29= createSprite(730, -120, 1200 ,30);

    wall30= createSprite(770, -230, 1200, 30);
    wall31= createSprite(540, -300, 30, 110);
    wall32= createSprite(790, -300, 30, 110);
    wall33= createSprite(545, -365, 250, 30);
    wall34= createSprite(663, -415, 30, 130);
    wall35= createSprite(413, -415, 30, 130);
    wall36= createSprite(165, -345, 250, 30);
    wall37= createSprite(1025,-365, 250, 30);
    wall38= createSprite(1025,-365, 250, 30);
    wall39= createSprite(913, -415, 30, 130);
    wall40= createSprite(858, -480, 130, 30);
    wall41= createSprite(413, -470, 270, 30);
    wall42= createSprite(295, -595, 30, 250);
    wall43= createSprite(543, -535, 30, 160);
    wall44= createSprite(605, -608, 150, 30);
    wall45= createSprite(668, -670, 30, 150);
    wall46= createSprite(793, -540, 30, 150);
    wall47= createSprite(983, -600, 350, 30);
    wall48= createSprite(1160,-660, 30, 150);
    wall49= createSprite(1043,-530, 30, 150);
    wall50= createSprite(1220,-475, 150, 30);
    wall51= createSprite(1100,-725, 150, 30);
    wall52= createSprite(112 ,-605, 140, 30);
    wall53= createSprite(165 ,-545, 30, 130);
    wall54= createSprite(420 ,-665, 30, 130);
    wall55= createSprite(738 ,-730, 130, 30);
    wall56= createSprite(300 ,-730, 270, 30);
    wall57= createSprite(910 ,-735, 30, 240);
    wall58= createSprite(545 ,-790, 30, 120);
    wall59= createSprite(600 ,-860, 1200, 30);
   
    wall60 = createSprite(600, -990, 1200, 30); 
    wall61= createSprite(800, -1050, 30, 150);
    wall62= createSprite(800, -1110, 250 ,30);
    wall63= createSprite(670, -1160, 30 ,125);
    wall64= createSprite(920, -1160, 30 ,125);
    wall65= createSprite(545, -1060, 30 ,130);
    wall66= createSprite(1175,-1090, 240 ,30);
    wall67= createSprite(315, -1110, 240 ,30);
    wall68= createSprite(420, -1180, 30 ,120);
    wall69= createSprite(480, -1230, 150 ,30);
    wall70= createSprite(541, -1300, 30 ,150);
    wall71= createSprite(350, -1360, 375 ,30);
    wall72= createSprite(300, -1300, 30 ,120);
    wall73= createSprite(100, -1200, 140 ,30);
    wall74= createSprite(920, -1220, 260 ,30);
    wall75= createSprite(800, -1300, 30 ,150);
    wall76= createSprite(1050, -1345, 30 ,280);
    wall77= createSprite(680, -1420, 30 ,160);
    wall78= createSprite(740, -1355, 100 ,30);
    wall79= createSprite(615, -1485, 100 ,30);
    wall80= createSprite(177, -1430, 30 ,120);
    wall81= createSprite(920, -1400, 30 ,130);
    wall82= createSprite(1045,-1480, 280 ,30);
    wall83= createSprite(400,-1480, 30 ,230);
    wall84= createSprite(1235,-1350, 140 ,30);
    wall85= createSprite(235, -1480, 140 ,30);
    wall86=createSprite(830,  -1550, 30 ,100);
    wall87= createSprite(1180, -1250, 30 ,180);
    wall89= createSprite(730, -1600, 1200 ,30);


    player = createSprite(displayWidth/2, 600, 30, 30);

    obstacle1 = createSprite(100, -180, 10, 10);
    obstacle2 = createSprite(100, -180, 10, 10);


}

function draw(){
    background(0);


    obstacle1.velocityX = 10;
    obstacle2.velocityX = -10;

    obstacle1.bounceOff(right_boundary);
    obstacle1.bounceOff(left_boundary);
    obstacle2.bounceOff(right_boundary);
    obstacle2.bounceOff(left_boundary);
 

    player.collide(right_boundary);
    player.collide(left_boundary);

 /*  player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(wall5);
    player.collide(wall6);
    player.collide(wall7);
    player.collide(wall8);
    player.collide(wall9);
    player.collide(wall10);
    player.collide(wall11);
    player.collide(wall14);
    player.collide(wall15);
    player.collide(wall16);
    player.collide(wall17);
    player.collide(wall18);
    player.collide(wall19);
    player.collide(wall20);
    player.collide(wall21);
    player.collide(wall22);
    player.collide(wall23);
    player.collide(wall24);
    player.collide(wall25);
    player.collide(wall26);
    player.collide(wall27);
    player.collide(wall28);
    player.collide(wall29);
    player.collide(wall30);

    player.collide(wall31);
    player.collide(wall32);
    player.collide(wall33);
    player.collide(wall34);
    player.collide(wall35);
    player.collide(wall36);
    player.collide(wall37);
    player.collide(wall39);
    player.collide(wall40);
    player.collide(wall41);
    player.collide(wall42);
    player.collide(wall43);
    player.collide(wall44);
    player.collide(wall45);
    player.collide(wall46);
    player.collide(wall47);
    player.collide(wall49);
    player.collide(wall50);
    player.collide(wall51);
    player.collide(wall52);
    player.collide(wall53);
    player.collide(wall54);
    player.collide(wall55);
    player.collide(wall56);
    player.collide(wall57);
    player.collide(wall58);
    player.collide(wall59);

    player.collide(wall60);
    player.collide(wall61);
    player.collide(wall62);
    player.collide(wall63);
    player.collide(wall64);
    player.collide(wall65);
    player.collide(wall66);
    player.collide(wall67);
    player.collide(wall68);
    player.collide(wall69);
    player.collide(wall70);
    player.collide(wall71);
    player.collide(wall72);
    player.collide(wall73);
    player.collide(wall74);
    player.collide(wall75);
    player.collide(wall76);
    player.collide(wall77);
    player.collide(wall78);
    player.collide(wall79);
    player.collide(wall80);

    player.collide(wall81);
    player.collide(wall82);
    player.collide(wall83);
    player.collide(wall84);
    player.collide(wall85);
    player.collide(wall86);
    player.collide(wall87);

    player.collide(wall89);*/

    

    camera.position.x = displayWidth/2;
    camera.position.y = player.y - 50;

    console.log(player.x);    
    console.log(player.y);



    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);

        }
        else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-5);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+5);
        }

        drawSprites();

}

function changePosition(x,y){
    player.x = player.x + x;
    player.y = player.y + y;
}