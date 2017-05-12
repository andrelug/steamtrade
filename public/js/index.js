import noUiSlider from './noUiSlider.min';
import wNumb from './wNumb';

(()=>{
	const slider = document.getElementById('slider');
	const minPrice = document.getElementById('minPrice');
	const maxPrice = document.getElementById('maxPrice');

	noUiSlider.create(slider, {
		start: [0, 3500],
		connect: true,
		step: 1,
		format: wNumb({
			decimals: 0
		}),
		range: {
			'min': 0,
			'max': 3500
		}
	});

	slider.noUiSlider.on('update', function( values, handle ) {
		minPrice.value = values[0];
		maxPrice.value = values[1];
	});

	fetch('http://localhost:3000/api/items', {
		credentials : 'same-origin'
	}).then( response => {

	});
})();
