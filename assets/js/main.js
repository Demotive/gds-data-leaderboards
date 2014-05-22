// slide functionality //////////////////////////////////////////////////////////////

var slides = document.getElementsByClassName('item');

var cycleSlides = function() {
	for (var i=0; i<slides.length; i++) {
		slides[i].classList.remove('prev');
	}
	var current = document.getElementsByClassName('now')[0];
	var next = current.nextElementSibling;
	if (!next) {
		next = slides[0];
	}
  if (next.getAttribute('style') !== null)  {
    next = next.nextElementSibling;
  }
	current.classList.add('prev');
	current.classList.remove('now');
	next.classList.add('now');
};

var sliderTimer = window.setInterval(cycleSlides, 20e3);