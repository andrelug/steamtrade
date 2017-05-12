import noUiSlider from './noUiSlider.min';
const slider = document.getElementById('slider');
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');

noUiSlider.create(slider, {
	start: [0, 3500],
	connect: true,
	range: {
		'min': 0,
		'max': 3500
	}
});

slider.noUiSlider.on('update', function( values, handle ) {
	minPrice.value = values[handle];
	maxPrice.value = values[handle];
});
