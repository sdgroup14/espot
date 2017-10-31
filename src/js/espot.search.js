(function() {
  'use strict';

  angular
    .module('espot.search', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('SearchCtrl', SearchCtrl);

  SearchCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http'];

  function SearchCtrl($scope, $rootScope, $timeout, $http) {
    $('.search-page-result').height($(window).height() - 190);


    $timeout(function() {
      $rootScope.pageTitle = "поиск";
      $('nav').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
    }, 500);


    $rootScope.$on('$locationChangeStart', function(evt) {
      $('.page-title').removeClass('active');

    });

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function() {
        $('nav').addClass('nav-show');
        $('.logo').addClass('start-page-logo');
        $('.page-title').addClass('active');
      }, 500);
    });

    $scope.dataSearch = [];

    $http({
      method: 'get',
      url: '../data/search.php'
    }).then(function(response) {
      $scope.dataSearch = response.data;

    }, function(error) {
      console.log(error);
    });

    $scope.getTimes = function(n) {
      return new Array(n);
    };

  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: '../views/pages/search.html',
        controller: SearchCtrl
      })
  };
})();