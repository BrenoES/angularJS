angular
	.module('Wooza')
	.config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');
			$routeProvider
				.when('/plataformas', {
					template: '<plataforma-template></plataforma-template>'
				})
				.when('/planos/:sku', {
					template: '<planos-template></planos-template>'
				})
				.when('/formulario/:planoSKU', {
					template: '<formulario-template></formulario-template>'
				})
				.otherwise('/plataformas');
		}
]);