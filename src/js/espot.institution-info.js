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
    $('.institution-content').height($(window).height() - 110);


    $timeout(function() {
      $rootScope.pageTitle = "О ЗАВЕДЕНИИ";
      $('.nav-1').removeClass('nav-show');
      $('.nav-2').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
    }, 100);



    $rootScope.$on('$locationChangeStart', function(evt) {
      // $('.page-title').removeClass('active');

    });

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
      // direction: 'horisontal',
      touchRatio: 1,
      // loop: true
      // slidesPerView: 1,
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
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