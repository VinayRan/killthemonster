  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
  var engine, world;
  var coolbackground;
 
  function preload() {
  //preload the images here
  coolbackground=loadImage("images/GamingBackground.png");
  }

  
  function setup() {
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 550, 1500, 20 );
    hero = new Hero(500, 100, 150, 220, PI/2);
    fly = new Fly(hero.body,{x: 500, y:10});
    //Column 1
    block1 = new Block(900, 350, 70, 70);
    block2 = new Block(900, 350, 70, 70);
    block3 = new Block(900, 350, 70, 70);
    block4= new  Block(900, 350, 70, 70);
    block5 = new Block(900, 350, 70, 70);
    block6 = new Block(900, 350, 70, 70);

    //Column 2 
    block7 = new Block(750, 450, 70, 70);
    block8 = new Block(750, 450, 70, 70);
    block9 = new Block(750, 450, 70, 70);
    block10 = new Block(750, 450, 70, 70);
    block11 = new Block(750, 450, 70, 70);
    block12 = new Block(750, 450, 70, 70);
    block13 = new Block(750, 450, 70, 70);

    //Column 3 
    block14 = new Block(600, 350, 70, 70);
    block15 = new Block(600, 350, 70, 70);
    block16 = new Block(600, 350, 70, 70);
    block17 = new Block(600, 350, 70, 70);
    block18 = new Block(600, 350, 70, 70);
    
    //MONSTER
    monster = new Monster(1000, 200, 100,100);
  }

  function draw() {
    background(coolbackground);
    Engine.update(engine);
    ground.display();
    hero.display();
    fly.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    monster.display();
    
  }
  function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
  }

