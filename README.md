# demo_汽车仪表盘
自己闲来无事做的一个汽车仪表盘demo
##主要技术：
-Canvas的应用
-JavaScript的滑动条制作
##HTML关键代码
、、、
<div id="top">

       <div class="clock" id="left">
       	<canvas id="myCanvas1" width="400" height="500">Your Browser dosen't match canvas!</canvas>
       </div>

       <div class="clock" id="mid">
       	<canvas id="myCanvas2" width="460" height="500">Your Browser dosen't match canvas!</canvas>
       </div>

       <div class="clock" id="right">
       	<canvas id="myCanvas3" width="400" height="500">Your Browser dosen't match canvas!</canvas>
       </div>

    </div>
   <!-- 拉动条部分 -->
   <div id="bottom">
   	   <div class="test_div">
         <!-- <canvas id="slider" width="800" height="200"></canvas> -->   
         <p id="Number"></p>      
         <input type="range" id="myRange"></input>

       </div>
   	   </div>
       、、、
       ##JS部分代码
       、、、
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
、、、
-这是一个汽车仪表盘demo，用了一个下午时间去学习Canvas并完成。效果不算特别完美，有很多需要改进的地方。若有更好建议与想法，欢迎issue和给出建议，希望和大家一起共同进步。谢谢。
