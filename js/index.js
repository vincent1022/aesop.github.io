var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },

  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
});

window.onload = function () {
	lax.init();

	// Add a driver that we use to control our animations
	lax.addDriver('scrollY', function () {
		return window.scrollY
	});

	// Add animation bindings to elements
	lax.addElements(
		".parallax_text",
		{
			scrollY: {
				opacity: [
					[0, 5000],
					[1, 0]
				]
			}
		},
		[]
	);
}
