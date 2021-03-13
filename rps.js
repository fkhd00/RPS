let countplayer=0;
let countcpu=0;
document.getElementById("cpu").innerHTML="CPU Score: " + countcpu;
document.getElementById("player").innerHTML="Player Score: " + countplayer;
function Rand(){
		let a=Math.floor(Math.random()*3);
		if(a==0){
			return "rock";
		}
		else if (a==1){
			return "paper";
		}
		else{
			return "scissor" ;
		}
	}

function RPS(but,rand){
		if(countplayer!==5||countcpu!==5){
			document.getElementById("resmes").innerHTML="";
		}
		if(countplayer==5||countcpu==5){
			countcpu=0;
			countplayer=0;
			document.getElementById("cpu").innerHTML="CPU Score: " + countcpu;
			document.getElementById("player").innerHTML="Player Score: " + countplayer;
		}
		if ((but=="rock" && rand=="paper")||(but=="paper" && rand=="scissor")||(but=="scissor" && rand=="rock")){
			console.log('You Lose! Loooooserrrrrr.'); 
			countcpu=countcpu+1;
			console.log(countcpu);
			document.getElementById("cpu").innerHTML="CPU Score: " + countcpu;
			document.getElementById("winlose").innerHTML="CPU Round";

		}
		else if (rand==but) {
			console.log("it's a draw !");
			document.getElementById("winlose").innerHTML="It's a Draw";

		}
		else{
			console.log('Congratulations you win !!!');
			countplayer=countplayer+1;
			console.log(countplayer);
			document.getElementById("player").innerHTML="Player Score: " + countplayer;
			document.getElementById("winlose").innerHTML="Player Round";

		}
		if(countplayer==5){
			document.getElementById("winlose").innerHTML="Congratulations You Won the Game !!!";
			document.getElementById("resmes").innerHTML="Click again to start a new game.";
		}
		else if(countcpu==5){
			document.getElementById("winlose").innerHTML="Sad Lyf. You Lose !!!";
			document.getElementById("resmes").innerHTML="Click again to start a new game.";
		}
	}

const x=document.getElementById("rock");

x.addEventListener('click',function(e){
x.classList.add('playing');	
setTimeout(function(){
	x.classList.remove("playing");
},100);
RPS("rock",Rand());
});

const y=document.getElementById("paper");

y.addEventListener('click',function(e){
y.classList.add('playing');	
setTimeout(function(){
	y.classList.remove("playing");
},100);
RPS("paper",Rand());
});

const z=document.getElementById("scissor");

z.addEventListener('click',function(e){
z.classList.add('playing');	
setTimeout(function(){
	z.classList.remove("playing");
},100);
RPS("scissor",Rand());
});


