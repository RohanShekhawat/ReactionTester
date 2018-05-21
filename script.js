	var start;
	var min=1000;
	function getRandomColor(){
		var letters='0123456789ABCDEF'.split('');
		var color='#';
		for(var i=0; i<6; i++){
			color +=letters[ Math.floor(Math.random() *16) ];
			}
		return color;
		}
	function makeshapeappear(){
		if(Math.random() > 0.5){
			document.getElementById("d1").style.borderRadius = "50%";
			}
		else {
		document.getElementById("d1").style.borderRadius = "0";
		}
		document.getElementById("d1").style.backgroundColor=getRandomColor();
		document.getElementById("d1").style.top=Math.random() *400+"px";
		document.getElementById("d1").style.left=Math.random() *400+"px";
		document.getElementById("d1").style.height=50+Math.random() *200+"px";
		document.getElementById("d1").style.width=50+Math.random() *200+"px";
 		document.getElementById("d1").style.display="block";
		start= new Date().getTime();
		}
	function appearAfterADelay(){
		setTimeout(makeshapeappear, Math.random()*2000);
		}
	appearAfterADelay();
	document.getElementById("d1").onclick= function (){
		document.getElementById("d1").style.display="none";
		var end =new Date().getTime();
		var time= (end-start)/1000;
		if(min>time){
			min=time;
			}
		document.getElementById("time").innerHTML=time+" sec";
		document.getElementById("mintime").innerHTML=min+" sec";
		appearAfterADelay();
		}