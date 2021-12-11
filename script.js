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

document.addEventListener('scroll', debounce(storeScroll), {passive: true});
storeScroll();


//Open song
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