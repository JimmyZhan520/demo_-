var c=document.getElementById("myCanvas3");
var cxt3 = c.getContext("2d");
// var  Deg2 = document.getElementById("myRange").value;

drawScreen3();

function drawScreen3(Deg){

// 第一个圆
var gr = cxt3.createRadialGradient(200,100,150,200,100,300);

gr.addColorStop(0,'#f7f7f7');
gr.addColorStop(1,'#000000');

cxt3.strokeStyle = gr;
cxt3.beginPath();
cxt3.arc(200,250,150,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt3.lineWidth = 4;
cxt3.stroke();
cxt3.closePath();

// 第二个圆
var gr_2 = cxt3.createRadialGradient(200,100,150,200,100,300);

gr_2.addColorStop(0,'#060607');
gr_2.addColorStop(.5,'#818181');
// gr_2.addColorStop(.7,'#060607');
// gr_2.addColorStop(.8,'#ffffff');
gr_2.addColorStop(.8,'#c3c3c3');
gr_2.addColorStop(1,'#e3e3e3');

cxt3.strokeStyle = gr_2;
cxt3.beginPath();
cxt3.arc(200,250,140,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt3.lineWidth = 18;
cxt3.stroke();
cxt3.closePath();

// 第三个圆
var gr_3 = cxt3.createRadialGradient(200,100,150,200,100,300);

gr_3.addColorStop(0,'#bfbfbf');
// gr_3.addColorStop(.1,'#575857');
gr_3.addColorStop(.3,'#676767')
gr_3.addColorStop(.5,'#797878');
gr_3.addColorStop(.7,'#232322');
gr_3.addColorStop(1,'#131313');

cxt3.strokeStyle = gr_3;
cxt3.beginPath();
cxt3.arc(200,250,120,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt3.lineWidth = 24;
cxt3.stroke();
cxt3.closePath();

// 第四个圆
var gr_4 = cxt3.createRadialGradient(200,100,150,200,100,300);

gr_4.addColorStop(0,'#0f0f0e');
gr_4.addColorStop(.5,'#8e8e8e');
gr_4.addColorStop(1,'#dddddc');

cxt3.strokeStyle = gr_4;
cxt3.beginPath();
cxt3.arc(200,250,110,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt3.lineWidth = 4;
cxt3.stroke();
cxt3.closePath();

// 第五个圆
var gr_5 = cxt3.createRadialGradient(200,100,150,200,100,300);

gr_5.addColorStop(0,'#000000');
gr_5.addColorStop(1,'#010102');

var gr_6 = cxt3.createLinearGradient(0,100,0,350);

gr_6.addColorStop(0,'#4c4c4b');
gr_6.addColorStop(.4,'#424241');
gr_6.addColorStop(.6,'#232322');
gr_6.addColorStop(1,'#000000');

cxt3.beginPath();
cxt3.strokeStyle = gr_5;
cxt3.fillStyle = gr_6;
cxt3.lineWidth = 6;
cxt3.arc(200,250,105,(Math.PI/180)*0,(Math.PI/180)*360,false);

cxt3.fill();
cxt3.stroke();
cxt3.closePath();


// 第七个圆
var gr_7 = cxt3.createLinearGradient(0,230,0,270);

gr_7.addColorStop(0,'#5f5f5f');
gr_7.addColorStop(.5,'#323231');
gr_7.addColorStop(1,'#0f0f0e');

var gr_8 = cxt3.createRadialGradient(150,220,60,150,220,80);

gr_8.addColorStop(0,'#e9e9e9');
gr_8.addColorStop(.5,'#797878');
gr_8.addColorStop(1,'#181919');

cxt3.beginPath();
cxt3.strokeStyle = gr_8;
cxt3.fillStyle = gr_7;
cxt3.lineWidth=3;
cxt3.arc(200,250,20,(Math.PI/180)*0,(Math.PI/180)*360,false);

cxt3.fill();
cxt3.stroke();
cxt3.closePath();

// 刻度
var deg = Math.PI/6;

for (var i = 0; i <=8; i++) {
  cxt3.save();
  cxt3.lineWidth = 5;
  if (i<7) {
  cxt3.strokeStyle = '#eeeeee';
  }
  else{cxt3.strokeStyle = '#f01e0f';}
  cxt3.translate(200,250);
  cxt3.rotate((i*30)*Math.PI/180);
  cxt3.beginPath();
  cxt3.moveTo(-105*Math.cos(deg),105*Math.sin(deg));
  cxt3.lineTo(-83*Math.cos(deg),83*Math.sin(deg));
  cxt3.closePath();
  cxt3.stroke();
  cxt3.restore();
}


// 第八个圆
cxt3.beginPath();
cxt3.strokeStyle = '#fcfcfc';
cxt3.lineWidth = 10;
cxt3.arc(200,250,72,(Math.PI)/180*30,(Math.PI)/180*150,true);
cxt3.stroke();
cxt3.closePath();

// 红色圆弧
cxt3.beginPath();
cxt3.strokeStyle = '#f01e0f';
cxt3.lineWidth = 10;
cxt3.arc(200,250,72,(Math.PI)/180*(-5),(Math.PI)/180*30,false);
cxt3.stroke();
cxt3.closePath();

//数字
var rad = (Math.PI/180)*240/4;
cxt3.save();
cxt3.beginPath();
cxt3.translate(200,250);
var R =-50;
for (var i = 4,j=0; i >=0; i--,j++) {
  var message = i*25;
  var x = R*Math.cos(rad*j-deg);
  var y = R*Math.sin(rad*j-deg);
  cxt3.fillStyle = '#eeeeee';
  cxt3.font = 'Bold 15px Arial';
  cxt3.textAlign = 'center';
  cxt3.textBaseline = 'middle';
  cxt3.fillText(message,x,y);  
}
cxt3.closePath();
cxt3.restore();


var R1 = -23;
var x1 = R1*Math.cos(deg);
var y1 = -R1*Math.sin(deg);
var R2 = -70;
var x2 = R2*Math.cos(deg);
var y2 = -R2*Math.sin(deg);
//指针
cxt3.save();
cxt3.translate(200,250);
cxt3.rotate(Deg*Math.PI/75);
cxt3.beginPath();
cxt3.lineWidth = 6;
cxt3.lineCap = 'round';
cxt3.moveTo(x1,y1);
cxt3.lineTo(x2,y2);
cxt3.strokeStyle = '#f01e0f';
cxt3.stroke();
cxt3.closePath();
cxt3.restore();

//加油标志
var oil = new Image();
oil.addEventListener('load',eventShipLoaded,false);
oil.src = 'img/oil.svg';

function eventShipLoaded(){
  draw();
}

function draw(){
  cxt3.save();
  cxt3.translate(200,250);
  cxt3.drawImage(oil,-10,55,30,30);
  cxt3.restore();
}
}