(function() {
  'use strict';

  angular
    .module('espot.institution-info', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('InstitutionInfoCtrl', InstitutionInfoCtrl);

  InstitutionInfoCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', '$cookies'];

  function InstitutionInfoCtrl($scope, $rootScope, $timeout, $http, $cookies) {
        $rootScope.$on('$viewContentLoading',
      function(event, viewConfig) {
        $('.spinner').fadeIn(1);
      });


    $scope.$on('$viewContentLoaded',
      function(event) {
        $('.spinner').fadeOut(1);
      });
    $('.back-btn-general').attr('href', $cookies.get("backLinkHref"));

    $timeout(function() {
      $rootScope.pageTitle = "main information";
      $('.nav-1').removeClass('nav-show');
      $('.nav-2').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
    }, 100);

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function() {
        $('.nav-1').removeClass('nav-show');
        $('.nav-2').addClass('nav-show');
        $('.logo').addClass('start-page-logo');
        $('.page-title').addClass('active');
      }, 100);
    });

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
    var mySwiper = new Swiper('.swiper-container', {
      touchRatio: 1
    });

    $timeout(function() {
      mySwiper.update();
    }, 1000);

  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('');
    $stateProvider
      .state('info', {
        url: '/info',
        parent: 'cafe',
        templateUrl: '../views/pages/institution-info.html',
        controller: InstitutionInfoCtrl
      });
  };
})();