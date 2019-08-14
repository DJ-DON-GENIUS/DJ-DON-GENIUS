
	window.onload=function(){
	var audioT=document.getElementById("audioD");
	var audioMix =["hiphop_mix.mp3","NAIJAMIX-36.mp3","testing (32).mp3","testing (36).mp3","CLUB_MIX_NIGERIA-26.mp3"];

	for(i=0; i< audioMix.length; i++){
	var audioE = document.createElement('audio');
	var audioTitle=document.createElement('a');
		audioTitle[i].setAttribute("href", "posts");
		audioTitle[i].setAttribute("onclick", "hellow()");
		audioTitle[i]..text=x[i].src;
		audioTitle[i].textContent=audioMix[i];
		audioE[i].src=audioMix[i];
		audioE[i].controls= true;
		audioE[i].autoplay= false;
		audioT.appendChild(audioE);
		audioT.appendChild(audioTitle);
	var lin   =document.createElement('br');
		audioT.appendChild(lin);
		

		}
	}
