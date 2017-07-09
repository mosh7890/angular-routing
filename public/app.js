var app = angular.module('scotcha', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact-us.html'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function ($scope) {
                $scope.scotches = ['Balvenie', 'The Balmore', 'Highland Park'];
            }
        })
        .state('home.about', {
            url: '/about',
            templateUrl: 'partial-home-about.html'
        })
        .state('scotch', {
            url: '/scotch/:type?temp',
            templateUrl: 'partial-scotch.html',
            controller: function ($scope, $stateParams) {
                $scope.myScotch = $stateParams;
            }
        })
        .state('scotchlibrary', {
            url: '/library/:type',
            templateUrl: function ($stateParams) {
                console.log($stateParams)
                return 'partial-scotch-' + $stateParams.type + '.html';
            }
        })
});