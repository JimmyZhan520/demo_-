var c = document.getElementById('myCanvas2');
var cxt2 = c.getContext("2d");
// var  Deg = document.getElementById("myRange").value;
// console.log(Deg);

drawScreen2();

function drawScreen2(Deg){

//第一个圆
var gr_1 = cxt2.createRadialGradient(250,100,70,250,100,400);

gr_1.addColorStop(0,'#f7f7f7');
gr_1.addColorStop(1,'#000000');

cxt2.strokeStyle = gr_1;
cxt2.beginPath();
cxt2.arc(250,250,200,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt2.lineWidth = 5;
cxt2.stroke();
cxt2.closePath();

// 第二个圆
var gr_2 = cxt2.createRadialGradient(250,100,70,250,100,400);

gr_2.addColorStop(0,'#b6b6b6');
gr_2.addColorStop(.5,'#2f2f2e');
gr_2.addColorStop(.6,'#707070');
gr_2.addColorStop(1,'#1f1e1f');

cxt2.strokeStyle = gr_2;
cxt2.beginPath();
cxt2.arc(250,250,185,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt2.lineWidth = 25;
cxt2.stroke();
cxt2.closePath();

// 第三个圆
var gr_3 = cxt2.createRadialGradient(250,100,70,250,100,370);

gr_3.addColorStop(0,'#a49f8f');
gr_3.addColorStop(.5,'#f0de5c');
gr_3.addColorStop(.6,'#e3e3e3');
gr_3.addColorStop(1,'#f0de5c');

cxt2.strokeStyle = gr_3;
cxt2.beginPath();
cxt2.arc(250,250,175,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt2.lineWidth = 4;
cxt2.stroke();
cxt2.closePath();

//第四个圆

cxt2.strokeStyle = '#010102';
cxt2.beginPath();
cxt2.arc(250,250,160,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt2.lineWidth = 30;
cxt2.stroke();
cxt2.closePath();

//第五个圆
var gr_4 = cxt2.createRadialGradient(250,55,60,250,55,300);

gr_4.addColorStop(0,'#525252');
gr_4.addColorStop(.4,'#2f2f2e');
gr_4.addColorStop(1,"#000000");

cxt2.fillStyle = gr_4;
cxt2.beginPath();
cxt2.arc(250,250,145,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt2.fill();
// cxt2.stroke();
cxt2.closePath();

// 第六个圆
var gr_5 = cxt2.createLinearGradient(0,200,0,300);

gr_5.addColorStop(0,'#676767');
gr_5.addColorStop(.5,'#353535');
gr_5.addColorStop(1,'#0f0f0e');

var gr_6 = cxt2.createLinearGradient(200,0,300,0);

gr_6.addColorStop(0,'#e3e3e3');
gr_6.addColorStop(.5,'#575857');
gr_6.addColorStop(1,'#161615');

cxt2.beginPath();
cxt2.strokeStyle = gr_6;
cxt2.fillStyle = gr_5;
cxt2.lineWidth=6;
cxt2.arc(250,250,35,(Math.PI/180)*0,(Math.PI/180)*360,false);

cxt2.fill();
cxt2.stroke();
cxt2.closePath();

// 大刻度
var deg = Math.PI/6;

for (var i = 0; i <=10; i++) {
  cxt2.save();
  cxt2.lineWidth = 8;

  cxt2.strokeStyle = '#eeeeee';
  cxt2.translate(250,250);
  cxt2.rotate((i*30)*Math.PI/180);
  cxt2.beginPath();
  cxt2.moveTo(-170*Math.cos(2*deg),170*Math.sin(2*deg));
  cxt2.lineTo(-130*Math.cos(2*deg),130*Math.sin(2*deg));
  cxt2.closePath();
  cxt2.stroke();
  cxt2.restore();
}

//小刻度
for (var i = 0; i < 50; i++) {
	cxt2.save();
	cxt2.lineWidth = 4;
	// cxt2.lineCap = 'round';
	cxt2.translate(250,250);
	cxt2.rotate(6*i*Math.PI/180);
	cxt2.beginPath();
	cxt2.moveTo(-170*Math.cos(2*deg),170*Math.sin(2*deg));
    cxt2.lineTo(-150*Math.cos(2*deg),150*Math.sin(2*deg));
    cxt2.stroke();
    cxt2.closePath();
    cxt2.restore();
}

//数字
var rad = Math.PI/6;
cxt2.save();
cxt2.beginPath();
cxt2.translate(250,250);
var R =-110;
for (var i = 0; i < 11; i++) {
  	var message = i*20;
  	var x = R*Math.cos(i*rad-2*deg);
  	var y = R*Math.sin(i*rad-2*deg);
  	cxt2.fillStyle = '#eeeeee';
  	cxt2.font = 'Bold 24px Arial';
  	cxt2.textAlign = 'center';
  	cxt2.textBaseline = 'middle';
  	cxt2.fillText(message,x,y);
}
cxt2.closePath();
cxt2.restore();


var R1 = -32;
var x1 = R1*Math.cos(2*rad);
var y1 = -R1*Math.sin(2*rad);
var R2 = -120;
var x2 = R2*Math.cos(2*rad);
var y2 = -R2*Math.sin(2*rad);
//指针
cxt2.save();
cxt2.translate(250,250);
cxt2.rotate(Deg*Math.PI/120);
cxt2.beginPath();
cxt2.lineWidth = 8;
cxt2.lineCap = 'round';
cxt2.moveTo(x1,y1);
cxt2.lineTo(x2,y2);
cxt2.strokeStyle = '#f01e0f';
cxt2.stroke();
cxt2.closePath();
cxt2.restore();


// 底下的圆
cxt2.save();
cxt2.translate(250,250);
var x2 = -25;
var y2 = 145;

for (var i = 0; i < 6; i++) {
    cxt2.fillStyle = '#ffffff';
	
	if (i==5) {cxt2.fillStyle = '#b93131';}
    var R = 3;
    cxt2.beginPath();
	cxt2.arc(x2,y2,R,(Math.PI/180)*0,(Math.PI/180)*360,false);
	cxt2.fill();
	cxt2.closePath();
	x2 +=10;
}

cxt2.restore();

//MPH
cxt2.save();
cxt2.beginPath();
cxt2.translate(250,250);
cxt2.fillStyle = '#ffffff';
cxt2.font = 'Bold 18px Arial';
cxt2.fillText('MPH',-20,130);
cxt2.closePath();
cxt2.restore();


}