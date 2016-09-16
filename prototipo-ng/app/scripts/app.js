'use strict';

/**
 * @ngdoc overview
 * @name prototipoApp
 * @description
 * # prototipoApp
 *
 * Main module of the application.
 */
 
angular.module('prototipoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.bootstrap',
	'ui.grid',
	'ui.grid.edit',
	'ui.grid.cellNav'
  ])
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/articulos', {
        templateUrl: 'views/articulos.html',
        controller: 'ArticulosCtrl'
      })
      .when('/galeria', {
        templateUrl: 'views/galeria.html',
        controller: 'GaleriaCtrl'
      })
      .when('/mienbros', {
        templateUrl: 'views/mienbros.html',
        controller: 'MienbrosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
