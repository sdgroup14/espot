(function() {
  'use strict';

  angular
    .module('espot.kitchen', [
      'ui.router',
       'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('KitchenCtrl', KitchenCtrl);

  KitchenCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http'];

  function KitchenCtrl($scope, $rootScope, $timeout, $http) {
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



    $scope.dataKitchen = [];

    $http({
      method: 'get',
      url: '../data/kitchen.php'
    }).then(function(response) {
      $scope.dataKitchen = response.data;
// console.log($scope.dataKitchen[0]);
// console.log($scope.dataKitchen[$index].items);
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
      .state('kitchen', {
        url: '/kitchen',
        templateUrl: '../views/pages/kitchen.html',
        controller: KitchenCtrl
      })
  };
})();