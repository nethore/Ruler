(function() {

    'use strict';

    angular.module('ruler', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.typeahead'])
            .config(function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'partials/home.html',
                        controller: 'persosCtrl',
                    })
                    .when('/list/:ltr?', {
                        templateUrl: 'partials/list.html',
                        controller: 'listCtrl',
                    })
                    .when('/about', {
                        templateUrl: 'partials/about.html',
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            });

}());
