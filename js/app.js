(function() {

    'use strict';

    angular.module('ruler', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.typeahead'])
            .config(function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'partials/home.html',
                        controller: 'persosCtrl',
                    })
                    .when('/about', {
                        templateUrl: 'partials/about.html',
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            });

}());
