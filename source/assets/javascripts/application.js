'use strict';

/**
 * @ngdoc overview
 * @name yangyingApp
 * @description
 * # yangYingApp
 *
 * Main module of the application.
 */

angular
	.module('yangyingApp', [
		'ngCookies',
		'ui.router'
	])

	.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {

	}])

	//*** APP Root Configuration
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		//*** Router Config.
		$urlRouterProvider.otherwise('/pages/dashboard');

		$stateProvider

			//App Page's
			//Router page have no controller
			.state('pages', {
				abstract: true,
				url: '/pages',
				templateUrl: 'pages/app.html'
			})

			//Dashboard
			//Dashboard uses DashboardCtrl
			.state('pages.dashboard', {
				url: '/dashboard',
				controller:'DashboardCtrl',
				templateUrl: 'pages/dashboard.html'
			})

			//Login
			//Login uses LoginCtrl
			.state('pages.login', {
				url: '/login',
				controller:'LoginCtrl',
				templateUrl: 'pages/login.html'
			})

	}]);


