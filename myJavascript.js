
	window.onload=function(){
	var audioT=document.getElementById("audioD");
	var audioMix =["hiphop_mix.mp3","NAIJAMIX-36.mp3","testing (32).mp3","testing (36).mp3","CLUB_MIX_NIGERIA-26.mp3"];

	for(i=0; i< audioMix.length; i++){
	var audioE = document.createElement('audio');
	var lin   =document.createElement('br');
	var audioTitle=document.createElement('a');
		audioTitle.setAttribute("href", "downloads");
		audioTitle.textContent=audioMix[i];
		audioE.src=audioMix[i];
		audioE.controls= true;
		audioE.autoplay= false;
		audioT.appendChild(audioE);
		audioT.appendChild(lin);
		audioT.appendChild(audioTitle);
	
		

		}
	}
