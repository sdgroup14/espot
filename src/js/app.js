(function() {
  'use strict';

  angular
    .module('espot', [
      'ui.router',
      'ngAnimate',
      'espot.index',
      'espot.search',
      'espot.kitchen',
      'espot.institution',
      'espot.institution-menu'
    ])
    .controller('AppCtrl', AppCtrl)
    .config(Config);

  AppCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

  function AppCtrl($scope, $rootScope, $timeout) {

    //         $timeout(function(){
    //    $('nav').removeClass('nav-show');
    //   $('.logo').removeClass('start-page-logo');
    //   $('.page-title').removeClass('active');
    //   }, 500);


    // $rootScope.$on('$locationChangeStart', function(evt) {
    //   console.log(evt);
    // });

    //     $rootScope.$on('$locationChangeSuccess', function(evt) {
    //   $timeout(function(){
    //    $('nav').removeClass('nav-show');
    //   $('.logo').removeClass('start-page-logo');
    //   $('.page-title').removeClass('active');
    //   }, 500);
    // });


  };

  Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function Config($stateProvider, $urlRouterProvider, $locationProvider) {
$urlRouterProvider.otherwise('/');
    $stateProvider
      .state('root', {
        url: '/',
        // templateUrl: '../views/pages/index/s1.html',
        controller: AppCtrl,
        redirectTo: 'index'
      });

    
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  };

})();