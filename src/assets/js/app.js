;(()=> {
	$(document).foundation();

	$(window).on('load', () => {
		$('button[data-toggle="project-navigation"]').on('click', ()=> {
			$('.secondary-navigation').toggleClass('opened');
			$('.main-content').toggleClass('navigation-opened');
		});
	});
})();
