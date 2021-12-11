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