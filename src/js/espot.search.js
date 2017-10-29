(function() {
  'use strict';

  angular
    .module('espot.search', [
      'ui.router',
       'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('SearchCtrl', SearchCtrl);

  SearchCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

  function SearchCtrl($scope, $rootScope, $timeout) {
    $('.search-page-result').height($(window).height() - 190);


    $timeout(function(){
    $rootScope.pageTitle = "поиск";
      $('nav').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
      }, 500);


    $rootScope.$on('$locationChangeStart', function(evt) {
      $('.page-title').removeClass('active');

    });

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function(){
      $('nav').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');

      }, 500);
    });

  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: '../views/pages/search/s1.html',
        controller: SearchCtrl
      })
  };
})();