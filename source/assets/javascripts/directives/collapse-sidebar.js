'use strict';

/**
 * @ngdoc directive
 * @name yangyingApp.directive:collapseSidebarSm
 * @description
 * # collapseSidebarSm
 */
angular.module('yangyingApp')
	.directive('collapseSidebar', function ($rootScope) {
		return {
			restrict: 'A',
			link: function postLink(scope, element) {

				var app = angular.element('#yangying');
				var	dropdownMenu = angular.element('.js-dropdown-menu');
				var $window = angular.element(window);
				var	width = $window.width();

				var collapse = function() {

					width = $window.width();

					if (width < 992) {
						app.addClass('sidebar-sm');
					} else {
						app.removeClass('sidebar-sm sidebar-xs');
					}

					if (width < 768) {
						app.removeClass('sidebar-sm').addClass('sidebar-xs');
						dropdownMenu.addClass('dropdown-menu');
					} else if (width > 992){
						app.removeClass('sidebar-sm sidebar-xs');
						dropdownMenu.removeClass('dropdown-menu');
					} else {
						app.removeClass('sidebar-xs').addClass('sidebar-sm');
						dropdownMenu.addClass('dropdown-menu');
					}
				};

				collapse();

				$window.resize(function() {
					if(width !== $window.width()) {
						var t;
						clearTimeout(t);
						t = setTimeout(collapse, 300);
					}
				});

				element.on('click', function(e) {
					if (app.hasClass('sidebar-sm')) {
						app.removeClass('sidebar-sm');
						dropdownMenu.removeClass('dropdown-menu');
					}
					else {
						app.addClass('sidebar-sm');
						dropdownMenu.addClass('dropdown-menu');
					}
					app.parent().removeClass('sidebar-sm');
					e.preventDefault();
				});

			}
		};
	});

