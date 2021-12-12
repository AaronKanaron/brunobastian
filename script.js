const debounce = (func) => {
	let frame;
	return (...params) => {
		if (frame) {
			cancelAnimationFrame(frame);
		}
		frame = requestAnimationFrame(() => {
			func(...params);
		});
	}
};

const storeScroll = () => {
	let scroll = window.scrollY;
	document.documentElement.setAttribute('style', `--scrollpos: ${scroll}`);

};

document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();


//Open song this is broken
const songs = ["capri"]

const openCard = (e) => {
	if(songs.find(element => element === e.id)){
		console.log("Found song in array: " + e.id)
	}
	if(e.classList.contains("open")){
		e.classList.remove("open")
	} else {
		e.classList.add("open")
	}
};


//Toggle an element specified by the id, if it is open, close it, if it is closed, open it
function toggleOpen(element) {
	el = document.getElementById(element);
	if(el.classList.contains("open")){
		el.classList.remove("open")
	} else {
		el.classList.add("open")
	}
}



const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function setActive(i){
	for(slide of slides){
		slide.classList.remove("active");
		slides[i].classList.add("active");
	}
	for(dot of dots){
		dot.classList.remove("active");
		dots[i].classList.add("active");
	}
}

for(let i = 0; i < dots.length; i++){
	dots[i].addEventListener("click", function(){
		setActive(i);
	});
}





var mouseX = window.innerWidth / 2,
	mouseY = window.innerHeight / 2;

var ball = {
	el: document.querySelector(".ball"),
	x: window.innerWidth / 2,
	y: window.innerHeight / 2,
	w: 50,
	h: 50,
	update:function(){
		l = this.x-this.w/2
		t = this.y-this.h/2
		this.el.style.transform = "translate3d("+l+"px,"+t+"px,0)"
	}
}

document.addEventListener("mousemove", function(e){
	//Get mouse positions
	mouseX = e.pageX;
	mouseY = e.pageY;
	move();
});

setInterval(move,1000/60);
function move(){
	ball.x = lerp(ball.x, mouseX, 0.1);
	ball.y = lerp(ball.y, mouseY, 0.1);
	ball.update();
}

function lerp(start, end, amt){
	return (1-amt)*start+amt*end;
}


document.querySelectorAll("[data-hover]").forEach(function(el){
	el.addEventListener("mouseenter", function(){
		document.querySelector(".ball").style.padding = "0px";

	});
	el.addEventListener("mouseleave", function(){
		document.querySelector(".ball").style.padding = "12.5px";
	});
});





window.onload = () => {
	setTimeout(() => {
		document.querySelector(".loader-wrapper").style.opacity = "0";

	}, 1000);
}