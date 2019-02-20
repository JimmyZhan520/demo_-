var c=document.getElementById("myCanvas1");
var cxt = c.getContext("2d");


// var  Deg = document.getElementById("myRange").value;
drawScreen1();
// setInterval(drawScreen1, 1000);

function drawScreen1(Deg){
   

   clear();
   function clear(){
		//清除画布
    cxt.clearRect(0,0,400,250);
  }


// 第一个圆
var gr = cxt.createRadialGradient(200,100,150,200,100,300);

gr.addColorStop(0,'#f7f7f7');
gr.addColorStop(1,'#000000');

cxt.strokeStyle = gr;
cxt.beginPath();
cxt.arc(200,250,150,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt.lineWidth = 4;
cxt.stroke();
cxt.closePath();

// 第二个圆
var gr_2 = cxt.createRadialGradient(200,100,150,200,100,300);

gr_2.addColorStop(0,'#060607');
gr_2.addColorStop(.5,'#818181');
// gr_2.addColorStop(.7,'#060607');
// gr_2.addColorStop(.8,'#ffffff');
gr_2.addColorStop(.8,'#c3c3c3');
gr_2.addColorStop(1,'#e3e3e3');

cxt.strokeStyle = gr_2;
cxt.beginPath();
cxt.arc(200,250,140,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt.lineWidth = 18;
cxt.stroke();
cxt.closePath();

// 第三个圆
var gr_3 = cxt.createRadialGradient(200,100,150,200,100,300);

gr_3.addColorStop(0,'#bfbfbf');
// gr_3.addColorStop(.1,'#575857');
gr_3.addColorStop(.3,'#676767')
gr_3.addColorStop(.5,'#797878');
gr_3.addColorStop(.7,'#232322');
gr_3.addColorStop(1,'#131313');

cxt.strokeStyle = gr_3;
cxt.beginPath();
cxt.arc(200,250,120,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt.lineWidth = 24;
cxt.stroke();
cxt.closePath();

// 第四个圆
var gr_4 = cxt.createRadialGradient(200,100,150,200,100,300);

gr_4.addColorStop(0,'#0f0f0e');
gr_4.addColorStop(.5,'#8e8e8e');
gr_4.addColorStop(1,'#dddddc');

cxt.strokeStyle = gr_4;
cxt.beginPath();
cxt.arc(200,250,110,(Math.PI/180)*0,(Math.PI/180)*360,false);
cxt.lineWidth = 4;
cxt.stroke();
cxt.closePath();

// 第五个圆
var gr_5 = cxt.createRadialGradient(200,100,150,200,100,300);

gr_5.addColorStop(0,'#000000');
gr_5.addColorStop(1,'#010102');

var gr_6 = cxt.createLinearGradient(0,100,0,350);

gr_6.addColorStop(0,'#4c4c4b');
gr_6.addColorStop(.4,'#424241');
gr_6.addColorStop(.6,'#232322');
gr_6.addColorStop(1,'#000000');

cxt.beginPath();
cxt.strokeStyle = gr_5;
cxt.fillStyle = gr_6;
cxt.lineWidth = 6;
cxt.arc(200,250,105,(Math.PI/180)*0,(Math.PI/180)*360,false);

cxt.fill();
cxt.stroke();
cxt.closePath();


// 第七个圆
var gr_7 = cxt.createLinearGradient(0,230,0,270);

gr_7.addColorStop(0,'#5f5f5f');
gr_7.addColorStop(.5,'#323231');
gr_7.addColorStop(1,'#0f0f0e');

var gr_8 = cxt.createRadialGradient(150,220,60,150,220,80);

gr_8.addColorStop(0,'#e9e9e9');
gr_8.addColorStop(.5,'#797878');
gr_8.addColorStop(1,'#181919');

cxt.beginPath();
cxt.strokeStyle = gr_8;
cxt.fillStyle = gr_7;
cxt.lineWidth=3;
cxt.arc(200,250,20,(Math.PI/180)*0,(Math.PI/180)*360,false);

cxt.fill();
cxt.stroke();
cxt.closePath();

// 刻度
for (var i = 0; i <=6; i++) {
	cxt.save();
	cxt.lineWidth =5;
	cxt.strokeStyle = '#eeeeee';
	cxt.translate(200,250);
	cxt.rotate((i*30)*Math.PI/180);
	cxt.beginPath();
	cxt.moveTo(-105,0);
	cxt.lineTo(-83,0);
	cxt.closePath();
	cxt.stroke();
	cxt.restore();
}

//文字
var rad = Math.PI/6;
cxt.save();
cxt.beginPath();
cxt.translate(200,250);
var R =-65;
for (var i = 0; i < 7; i++) {
  	var message = i*25;
  	var x = R*Math.cos(i*rad);
  	var y = R*Math.sin(i*rad);
  	cxt.fillStyle = '#eeeeee';
  	cxt.font = 'normal 20px Arial';
  	cxt.textAlign = 'center';
  	cxt.textBaseline = 'middle';
  	cxt.fillText(message,x,y);
}
cxt.closePath();
cxt.restore();

//指针
cxt.save();
cxt.translate(200,250);
cxt.rotate(Deg*Math.PI/150);
cxt.beginPath();
cxt.lineWidth = 6;
cxt.lineCap = 'round';
cxt.moveTo(-23,0);
cxt.lineTo(-70,0);
cxt.strokeStyle = '#f01e0f';
cxt.stroke();
cxt.closePath();
cxt.restore();

//OIL
cxt.save();
cxt.beginPath();
cxt.translate(200,250);
cxt.fillStyle = '#ffffff';
cxt.font = 'Bold 24px Arial';
cxt.fillText('OIL',-20,70);
cxt.closePath();
cxt.restore();
}

