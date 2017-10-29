(function() {
  'use strict';

  angular
    .module('espot.kitchen', [
      'ui.router',
       'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('KitchenCtrl', KitchenCtrl);

  KitchenCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

  function KitchenCtrl($scope, $rootScope, $timeout) {
    $('.kitchen-page-result').height($(window).height() - 190);


    $timeout(function(){
      $rootScope.pageTitle = "ТИП КУХНИ";
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
      .state('kitchen', {
        url: '/kitchen/kitchen',
        templateUrl: '../views/pages/kitchen/s1.html',
        controller: KitchenCtrl
      })
  };
})();