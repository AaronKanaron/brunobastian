/*                      _     
	 /\                (_)    
	/  \   _ __  _ __   _ ___ 
   / /\ \ | '_ \| '_ \ | / __|
  / ____ \| |_) | |_) || \__ \
 /_/    \_\ .__/| .__(_) |___/
		  | |   | |   _/ |    
		  |_|   |_|  |__/     */


/*=-------------------=/
││                     │
││      Functions      │
││                     │
/=-------------------=*/

function toggleOpen(element) {
	el = document.getElementById(element);
	if (el.classList.contains("open")) {
		el.classList.remove("open")
	} else {
		el.classList.add("open")
	}
}

const debounce = (func, wait) => {
	let timeout;

	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

/*=-------------------=/
││                     │
││      Observers      │
││                     │
/=-------------------=*/

//Options
const toggleOnScrollOptions = {
	root: null,
	rootMargin: '-200px 10000px -50px 10000px',
	threshold: .5
}
const appearOnScrollOptions = {
	root: null,
	rootMargin: '0px 10000px -100px 10000px',
	threshold: .5
}

//Observers
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			entry.target.classList.remove('observing');
		} else{ 
			entry.target.classList.add("observing");
			appearOnScroll.unobserve(entry.target);
		}
	});
}, appearOnScrollOptions);
const toggleOnScroll = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			entry.target.classList.remove("observing");
		} else{
			entry.target.classList.add("observing");
		}
	});
}, toggleOnScrollOptions);


//Queryselector
document.querySelectorAll(".fade-in").forEach((el) => {
	appearOnScroll.observe(el);
});
document.querySelectorAll(".fade-in-toggle").forEach((el) => {
	toggleOnScroll.observe(el);
});
document.querySelectorAll(".fade-out").forEach((el) => {
	toggleOnScroll.observe(el);
});
document.querySelectorAll(".slide-in").forEach((el) => {
	appearOnScroll.observe(el);
});

/*=-------------------=/
││                     │
││   Event Listeners   │
││                     │
/=-------------------=*/

// document.addEventListener('scroll', debounce(storeScroll, 5), { passive: true });
document.addEventListener("mousemove", debounce((e) => {
	mouseX = e.pageX;
	mouseY = e.pageY;
	move();
}, 1), { passive: true });



/*=-------------------=/
││                     │
││     Mouse Ball      │
││                     │
/=-------------------=*/


var mouseX = window.innerWidth / 2,
	mouseY = window.innerHeight / 2;

var ball = {
	el: document.querySelector(".ball"),
	x: window.innerWidth / 2,
	y: window.innerHeight / 2,
	w: 50,
	h: 50,
	update: function () {
		l = this.x - this.w / 2
		t = this.y - this.h / 2
		this.el.style.transform = "translate3d(" + l + "px," + t + "px,0)"
	}
}

setInterval(move, 10);
function move() {
	ball.x = lerp(ball.x, mouseX, 0.1);
	ball.y = lerp(ball.y, mouseY, 0.1);
	ball.update();
}

const lerp = (start, end, amt) => {
	return (1 - amt) * start + amt * end;
}

document.querySelectorAll("[data-hover]").forEach((el) => {
	el.addEventListener("mouseenter", function () {
		document.querySelector(".ball").style.padding = "0px";
		document.querySelector(".ball").style.left = "12.5px";
		document.querySelector(".ball").style.top = "12.5px";


	});
	el.addEventListener("mouseleave", function () {
		document.querySelector(".ball").style.padding = "12.5px";
		document.querySelector(".ball").style.left = "0px";
		document.querySelector(".ball").style.top = "0";
	});
});
