//Rivoira Lourdes / Salvador Maillaina
//Corrección del tp
//comision 4
//La chica que saltaba a traves del tiempo
// Video: https://youtu.be/rSsa2cq9ySA


let anchoPantalla =640;
let altoPantalla =480;
let misTextos =[];
let  anchoTexto ;
let tamTexto;
let  inicioTexto ;

  

  let pantallaActual =0;
let posXBoton =273;
let posYBoton =270;
let anchoBoton =80;
let altoBoton =30;
let misImagenes =[];
let cantImgs =24
  let y =5
  let t=1

  let musica;

function preload() {
  for (let i=0; i<cantImgs; i++) {
    misImagenes[i]=loadImage("data/Designer"+i+".jpg");
  }
  misTextos =  loadStrings('data/aventura.txt');

  soundFormats('mp3');
  musica=loadSound("data/mario.mp3")
}
function setup() {
  createCanvas( anchoPantalla, altoPantalla);
}


function draw() {
  background(0);
  reload();
   if (pantallaActual==0) {
    pantalla1Boton(22, 19)
   } else if (pantallaActual==1) {
    pantalla1Boton(0, 0 )
  } else if (pantallaActual==2) {
    pantalla1Boton(1, 1)
  } else if (pantallaActual==3) {
    pantalla1Boton(2, 2)
  } else if (pantallaActual==4) {
    pantallaCon2Botones(3, 3)
  } else if (pantallaActual==5) {
    pantalla1Boton(4, 4)
  } else if (pantallaActual==6) {
    pantalla1Boton(5, 5)
  } else if (pantallaActual==7) {
     pantalla1Boton(6, 6)
     } else if (pantallaActual==8) {
    pantallaFinal(18, 18)
  } else if (pantallaActual==9) {
    pantalla1Boton(7, 7)
  } else if (pantallaActual==10) {
    pantalla1Boton(8, 8)
  } else if (pantallaActual==11) {
    pantallaCon2Botones(9, 9)
  } else if (pantallaActual==12) {
    pantalla1Boton(10, 10)
  } else if (pantallaActual==13) {
    pantalla1Boton(11, 11)
  } else if (pantallaActual==14) {
     pantalla1Boton(12, 12)
    } else if (pantallaActual==15) {
    pantallaFinal(18, 18)
  } else if (pantallaActual==16) {
    pantalla1Boton(13, 13)
  } else if (pantallaActual==17) {
    y = 1
      t= -4
      pantallaCon2Botones(14, 14)
  } else if (pantallaActual==18) {
    pantalla1Boton(15, 15)
  } else if (pantallaActual==19) {
    pantalla1Boton(16, 16)
  } else if (pantallaActual==20) {
     pantalla1Boton(17, 17)
  } else if (pantallaActual==21) {
    pantallaFinal(18, 18)
  }
}
function mousePressed() {
  if (!musica.isPlaying()) {
    musica.loop();
  }
  clickBotonCuadrado();
  clickBotonNo();
  clickBotonSi();
  BotonFinal();
}
