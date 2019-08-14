
	window.onload=function(){
	var audioT=document.getElementById("audioD");
	var audioMix =["hiphop_mix.mp3","NAIJAMIX-36.mp3","testing (32).mp3","testing (36).mp3","CLUB_MIX_NIGERIA-26.mp3"];

	for(i=0; i< audioMix.length; i++){
	var audioE = document.createElement('audio')[i];
	var audioTitle=document.createElement('a')[i];
		audioTitle.setAttribute("href", "postDownload");
		audioTitle.setAttribute("onclick", "postPage(event)");
		audioTitle.text=audioMix[i];
		audioE.src=audioMix[i];
		audioE.controls= true;
		audioE.autoplay= false;
		audioT.appendChild(audioE);
		audioT.appendChild(audioTitle);
	var lin   =document.createElement('br');
		audioT.appendChild(lin);
		

		}
	}
/*function postPage(event){
	//var ds=document.getElementById(vs).text;

//alert("i am clicked: "+ds);
 //alert(event.target.nodeName);
 alert("You clicked: "+ this.vs);
	//alert(event.target);
        event.stopPropagation();

}*/
