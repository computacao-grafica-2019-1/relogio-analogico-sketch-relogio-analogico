var cx, cy;
var minutesRadius;
var hoursRadius;
var clockDiameter;
var raionumeros = 145;
var cont = 3;
var angulo = 0.5;

function setup() {
  createCanvas(720, 400);
  stroke(255);
  
  var raio = min(width, height) / 2;
  minutesRadius = raio * 0.60;
  hoursRadius = raio * 0.50;
  clockDiameter = raio * 1.7;
  
  cx = width / 2;
  cy = height / 2;
}

function desenhar_num(cont, angulo){
	fill(255);
	noStroke();
	textStyle(BOLD);
	// transforma o angulo de
	// coord polar para coord cartesiana
	var x = cos(radians(angulo)) * raionumeros;
	var y = sin(radians(angulo)) * raionumeros;
	// desenha uma elipse na coord (x,y)
	// corrige (x,y) para (x+cx,y+cy)
	 textSize(20);
	text(cont, x + cx, y + cy);				
}

function draw() {
	background(230);
  
	// Desenhando o background do relógio
	noStroke();
	fill(0);
	ellipse(cx +5, cy - 3, clockDiameter + 20, clockDiameter + 30);
	fill(237,34,93);
	ellipse(cx+5, cy -5, clockDiameter + 10, clockDiameter + 10)
  
	//Desenhando o centro
	fill(255);
	ellipse(cx, cy, 15);
	
	//Desenhando os ponteiros
	stroke(255);
	strokeWeight(2);
	//line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
	line(cx, cy, cx, cy - minutesRadius);
	line(cx, cy, cx + hoursRadius, cy);
	
	//Desenhando as pontas dos ponteiros
	triangle(354, 79, 360, 64, 366, 79); //ponteiro-minutos
	triangle(460, 195, 475, 200, 460, 205); //ponteiro-horas
	
	//Desenhando as linhas pra quatro números
	//linha do nº 12
	line(360, 20, 360, 35);
	//linha do nº 3
	line(538, 192, 520, 192);
	//linha do nº 6
	line(363, 353, 363, 370);
	//linha do nº 9
	line(190, 192, 209, 192, 350);
	
	
	// Desenhando os números do relógio
	desenhar_num(cont,angulo);
	desenhar_num(cont+1,angulo+30);
	desenhar_num(cont+2,angulo+60);
	desenhar_num(cont+3,angulo+90);
	desenhar_num(cont+4,angulo+120);
	desenhar_num(cont+5,angulo+150);
	desenhar_num(cont+6,angulo+180);
	desenhar_num(cont+7,angulo+210);
	desenhar_num(cont+8,angulo+240);
	desenhar_num(cont+9,angulo+266);
	desenhar_num(cont-2,angulo+298);
	desenhar_num(cont-1,angulo+328);
}