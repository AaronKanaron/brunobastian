

/*=-------------------=/
││                     │
││   Event Listeners   │
││                     │
/=-------------------=*/

window.onload = () => { document.querySelector(".loader-wrapper").style.opacity = "0"; }


/*=-------------------=/
││                     │
││   Event Listeners   │
││                     │
/=-------------------=*/

const tracks = [
	{ name: "Lush", year: "2020", poster: "posters/lush.webp" },
	{ name: "Capri", year: "2021", poster: "posters/capri.webp" },
	{ name: "Gelato", year: "2020", poster: "posters/gelato.webp" },
	{ name: "Campari", year: "2021", poster: "posters/campari.jpg" },
	{ name: "Apollo", year: "2020", poster: "posters/apollo.jpg" }
]

for (let i = 0; i < tracks.length; i++) {
	const track = tracks[i];

	const slide = document.createElement("div");
	slide.classList.add("slide")
	slide.classList.add("fade-in-toggle");

	//Poster element
	const poster = document.createElement("div");
	poster.classList.add("poster");
	const img = document.createElement("img");
	img.src = track.poster;
	img.alt = track.name;
	img.draggable = false;
	poster.appendChild(img);
	slide.appendChild(poster);

	//Info element
	const info = document.createElement("div");
	info.classList.add("info");
	const name = document.createElement("h2");
	name.innerHTML = track.name;
	const year = document.createElement("p");
	year.innerHTML = track.year;
	const listen = document.createElement("button");
	listen.setAttribute("data-hover", "");
	listen.innerHTML = "Listen";
	info.appendChild(name);
	info.appendChild(year);
	info.appendChild(listen);
	slide.appendChild(info);
	
	document.getElementsByClassName("slides")[0].appendChild(slide);


	//dots
	const dot = document.createElement("p");
	dot.classList.add("dot");
	dot.setAttribute("onclick", "goTrack(" + (i + 1) + ")");
	dot.setAttribute("data-hover", "");
	const span = document.createElement("span");
	dot.appendChild(span);
	document.getElementsByClassName("dots")[0].appendChild(dot);
}

var slideIndex = 1;

const showSlides = (n) => {
	var slides = document.getElementsByClassName("slide");

	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }

	//slides
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "flex";
	console.log(n-1, ", current slideindex")


	// dots
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}
	dots[slideIndex - 1].classList.add("active");
}

const goTrack = (trackNumber) => {
	showSlides(slideIndex = trackNumber)
}

const turnTrack = (direction) => {
	showSlides(slideIndex += direction);
}

showSlides(slideIndex)
