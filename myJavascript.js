
	window.onload=function music(){
	var audioT=document.getElementById("audioD");
	var sup = document.getElementById("su");
	var audioMix =["hiphop_mix.mp3","NAIJAMIX-36.mp3","testing (32).mp3","testing (36).mp3","CLUB_MIX_NIGERIA-26.mp3","CLUB_mix3.mp3","MID_WEEK_CLUBBING.mp3","PARTY-TIME-NIAJA.mp3"," COOL-JAMZ (1).mp3","COOL-JAMZ-2.mp3"];

	for(i=0; i< audioMix.length; i++){
	var audioE = document.createElement('audio');
	var audioTitle=document.createElement('p');
		//audioTitle.setAttribute("href", "postDownload");
		//audioTitle.setAttribute("onclick", "postPage(event)");
		//audioTitle.setAttribute("href", "postDownload");
		audioTitle.style.color=(i==audioMix.length-1)?"yellow":"white";
		audioTitle.textContent=audioMix[i];
		audioE.src=audioMix[i];
		audioE.controls= true;
		audioE.autoplay= false;
		audioT.appendChild(audioE);
		audioT.appendChild(audioTitle);
	//var lin   =document.createElement('br');
	//	audioT.appendChild(lin);
	var hr = document.createElement('hr');
		hr.style.color=(i==audioMix.length-1)?"navy":"blue";
      		  audioTitle.appendChild(hr);
		

		}
	sup.textContent = audioMix.length - 1
	}

function postPage(event){
	//var ds=document.getElementById(vs).text;
//alert("i am clicked: "+ds);
 //alert(event.target.nodeName);
 //alert("You clicked: "+ this.vs);
	//alert(event.target);
	document.body.innerHTML=`<div><h1 style="color:green">HAPPY DOWNLOAD AND LISTENING</h1> <p><a href="index.html">HOME PAGE</a></p><br><p><a href="downloads3.html">BACK TO DOWNLOADE PAGE</a></p></br>
	<p style="color: white; background-Color: green">TITLE :   <b>
	${event.currentTarget.textContent}<br/> </b>
	 BY :  <b> DJ DON GENIUS</b></br></p>
	<audio src="${event.currentTarget.textContent}" controls="true"></audio></div><hr color="yellow"><div style="background-Color: green; color: white"><b>COMMENTS: </b></div>`;
        //event.stopPropagation();
}

function videos(){
 document.alert("no availble video for download yet, it will be shown on available downloads soon, thank you for your patient");
}
