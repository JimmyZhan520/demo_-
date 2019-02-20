var k;

document.getElementById('Number').innerHTML = 50;

document.getElementById("myRange").addEventListener('click',Move,true);

//设置滑动条长度
set();
// Move();
function Move(){    
    getValue();
    var  Deg = document.getElementById("myRange").value;

    if (k==0) {drawScreen1(Deg);
    }
    if (k==1) drawScreen2(Deg);
    if (k==2) drawScreen3(Deg);
    console.log(k+'drawScreen1');
}
    
 // 获取当前的值
function getValue(){
	var value = document.getElementById("myRange").value;
  if (k==2) {
    document.getElementById('Number').innerHTML = 100 - value;
  }
  else{
    document.getElementById('Number').innerHTML = value;
  }
}

    //设置max min
 function setValue(Max,Min){       
    	document.getElementById('myRange').max = Max;
    	document.getElementById('myRange').min = Min;
    }

function set(){
	var oDiv = document.getElementsByClassName("clock");
    for (var i = 0; i < oDiv.length; i++) {
        (function(i) {
            oDiv[i].onclick = function() {
               if (i==0) {
                    setValue(150,0);
                    console.log("aaa");             
                  }
               if (i==1) {
                setValue(200,0);
                console.log("a");
              }
               if (i==2) {
                setValue(100,0);
                console.log("aa");
              } 
              k=i;
            console.log(k);
            }

        })(i)
    }
    Move();
}
