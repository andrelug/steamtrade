// Exemplo de organização simples de jQuery
(function(){
	const people = {
		people: [],
		init: function () {
			this.cacheDom();
			this.bindEvents();
			this.render();
		},
		cacheDom: function () {
			this.$el = $('#pegaId');
			this.$outroEl = $('.pegaAlgo');
			this.template = this.$el.find('#navevaNaDom');
		},
		bindEvents: function() {
			this.$outroEl.on('click', this.addPerson.bind(this));
		},
		render: function() {
			const data = {
				people: this.people
			};
			this.$el.html(Mustache.render(this.template, data));
		},
		addPerson: function() {
			this.people.push(this.$el.val());
		}
	};

	people.init();
})();
