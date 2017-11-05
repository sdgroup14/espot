(function() {
  'use strict';

  angular
    .module('espot.institution-menu', [
      'ui.router',
       'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('InstitutionMenuCtrl', InstitutionMenuCtrl);

  InstitutionMenuCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', '$cookies'];

  function InstitutionMenuCtrl($scope, $rootScope, $timeout, $http, $cookies) {
    // $('.institution-content').height($(window).height() - 110);


    $timeout(function(){
      $rootScope.pageTitle = "Меню";
      $('.nav-2').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
      }, 100);


    $rootScope.$on('$locationChangeStart', function(evt) {
      // $('.page-title').removeClass('active');

    });

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function(){
      $('.nav-2').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');

      }, 100);
    });

  //     $scope.isActive = false;
  // $scope.activeButton = function() {
  //   $scope.isActive = !$scope.isActive;
  // }  





    $http({
      method: 'post',
      data: '{"id":' + $cookies.get("cookiesCafeId") + '}',
      url: 'https://api.icreations.agency/cafe'
    }).then(function(response) {
      $scope.dataCafeInfo = response.data;
      console.log($scope.dataCafeInfo);
      $scope.getStarsCafeArr = Array;
      $scope.starsNum = +response.data.placeRate;
    }, function(error) {
      console.log(error);
    });

  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('menu', {
        url: '/menu',
        parent: 'cafe',
        templateUrl: '../views/pages/institution-menu.html',
        controller: InstitutionMenuCtrl
      })
  };
})();