document.addEventListener('DOMContentLoaded', () => {
	const year = document.getElementById('year');
	if (year) year.textContent = new Date().getFullYear();

	const toggle = document.querySelector('.menu-toggle');
	const links = document.querySelector('.nav-links');
	if (toggle && links) {
		toggle.addEventListener('click', () => {
			links.classList.toggle('open');
			links.classList.toggle('glass');
		});
	}

	// Auto-hide header on scroll down, show on scroll up
	const header = document.querySelector('.site-header');
	let lastY = window.scrollY;
	const onScroll = () => {
		const y = window.scrollY;
		if (y > 10) {
			document.body.classList.add('scrolled');
		} else {
			document.body.classList.remove('scrolled');
		}
		if (y > lastY + 4) {
			// scrolling down
			header && header.classList.add('header-hidden');
		} else if (y < lastY - 4) {
			// scrolling up
			header && header.classList.remove('header-hidden');
		}
		lastY = y;
	};
	window.addEventListener('scroll', onScroll, { passive: true });
});


