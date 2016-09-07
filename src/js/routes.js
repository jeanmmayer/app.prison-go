'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('registro-detento', {
                url: '/detentos/registro-detento',
                templateUrl: 'templates/detentos/registro-detento.html'
            })
            .state('lista-detento', {
                url: '/detentos/lista-detento',
                templateUrl: 'templates/detentos/lista-detento.html'
            });
    }
]);