void setup(){
  frameRate(20);


  size(600, 600);


  PImage img[] = {loadImage("c1.jpg"),loadImage("c2.jpg"),loadImage("c3.jpg"),loadImage("c4.jpg")
            };

  for (int i = 0; i<4;i++)
    img[i].loadPixels();

  loadPixels();

  for (int i = 0; i < 600*600; i++){
    if ((i%12)<3){
      pixels[i] = img[0].pixels[i];
    }
    else if((i%12)<6){
      pixels[i] = img[1].pixels[i];
    }
    else if((i%12)<9){
      pixels[i] = img[2].pixels[i];
    }
    else {
      pixels[i] = img[3].pixels[i];
    }
  }
  updatePixels();
  save("fondo.jpg");
  fill(0);
  noStroke();
}

int i = -100;
void draw(){
  updatePixels();
  for(int j=0;j<1200;j=j+12){
    rect(i+j,0,8,600);
  }
  i = i+1;
}
