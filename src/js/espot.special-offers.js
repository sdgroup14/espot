(function() {
  'use strict';

  angular
    .module('espot.special-offers', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('specialOffersCtrl', specialOffersCtrl);

  specialOffersCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http'];

  function specialOffersCtrl($scope, $rootScope, $timeout, $http) {
        $rootScope.$on('$viewContentLoading',
      function(event, viewConfig) {
        $('.spinner').fadeIn(1);
      });


    $scope.$on('$viewContentLoaded',
      function(event) {
        $('.spinner').fadeOut(1);
      });
    // $('.kitchen-page-result').height($(window).height() - 190);
// console.log(CafeIdService.getId());
// console.log($scope.data);
    // console.log(data.firstName);
    $timeout(function() {
      $rootScope.pageTitle = "about";
      $('.nav-1').addClass('nav-show');
      $('.nav-2').removeClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
    }, 100);


    $rootScope.$on('$locationChangeStart', function(evt) {
      // $('.page-title').removeClass('active');

    });

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function() {
        $('.nav-1').addClass('nav-show');
        $('.nav-2').removeClass('nav-show');
        $('.logo').addClass('start-page-logo');
        $('.page-title').addClass('active');

      }, 100);
    });



    $scope.dataKitchen = [];

    $http({
      method: 'get',
      url: 'https://api.icreations.agency/kitchen'
    }).then(function(response) {
      $scope.dataKitchen = response.data;
      // console.log(response);
    }, function(error) {
      console.log('Ошибка:' + error);
    });

    $scope.getTimes = function(n) {
      return new Array(n);
    };

  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('special-offers', {
        url: '/special-offers',
        templateUrl: '../views/pages/special-offers.html',
        controller: specialOffersCtrl
      })
  };
})();