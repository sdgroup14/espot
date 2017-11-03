(function() {
  'use strict';

  angular
    .module('espot.kitchen', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('KitchenCtrl', KitchenCtrl);

  KitchenCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http'];

  function KitchenCtrl($scope, $rootScope, $timeout, $http) {
    $('.kitchen-page-result').height($(window).height() - 190);


    $timeout(function() {
      $rootScope.pageTitle = "ТИП КУХНИ";
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



    $scope.dataKitchen = [];

    // $http({
    //   method: 'get',
    //   url: 'https://api.icreations.agency/kitchen'
    // }).then(function(response) {
    //   $scope.dataKitchen = response.data;
    //   console.log(response);
    // }, function(error) {
    //   console.log('Ошибка:' + error);
    // });

    // $scope.getTimes = function(n) {
    //   return new Array(n);
    // };

    //        $http({
    //   method: 'get',
    //   url: 'https://api.icreations.agency/cafe'
    // }).then(function(response) {
    //   // $scope.dataSearch = response.data;
    //   console.log('Cafe:' + response);

    // }, function(error) {
    //   console.log(error);
    // });

    //     $http({
    //   method: 'get',
    //   url: 'https://api.icreations.agency/comments'
    // }).then(function(response) {
    //   // $scope.dataSearch = response.data;
    //   console.log('comments:' + response);

    // }, function(error) {
    //   console.log(error);
    // });


  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('kitchen', {
        url: '/kitchen',
        templateUrl: '../views/pages/kitchen.html',
        controller: KitchenCtrl
      })
  };
})();