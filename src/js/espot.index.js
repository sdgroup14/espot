(function() {
  'use strict';

  angular
    .module('espot.index', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('IndexCtrl', IndexCtrl);

  IndexCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

  function IndexCtrl($scope, $rootScope, $timeout) {
    
    $timeout(function() {
      $('.page-title').removeClass('active');
      $('nav').removeClass('nav-show');
      $('.logo').removeClass('start-page-logo');
    }, 500);


    // $rootScope.$on('$locationChangeStart', function(evt) {
    //   $('nav').removeClass('nav-show');
    //   $('.logo').removeClass('start-page-logo');
    //   $('.page-title').removeClass('active');
    // });

        $rootScope.$on('$locationChangeSuccess', function(evt) {
          console.log(evt);
      // $timeout(function(){
      //  $('nav').removeClass('nav-show');
      // $('.logo').removeClass('start-page-logo');
      // $('.page-title').removeClass('active');
      // }, 1);
    });

           $rootScope.$on('$locationChangeSuccess', function(evt) { 
    });



  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: '../views/pages/index/s1.html',
        controller: IndexCtrl,
      })
  };
})();