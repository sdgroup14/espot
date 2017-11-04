(function() {
  'use strict';

  angular
    .module('espot.institution-reviews', [
      'ui.router',
       'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('InstitutionReviewsCtrl', InstitutionReviewsCtrl);

  InstitutionReviewsCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', '$cookies'];

  function InstitutionReviewsCtrl($scope, $rootScope, $timeout, $http, $cookies) {
    $('.inst-reviews-list').height($(window).height() - 110);


    $timeout(function(){
      $rootScope.pageTitle = "Отзывы";
      $('.nav-2').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
      }, 500);


    $rootScope.$on('$locationChangeStart', function(evt) {
      $('.page-title').removeClass('active');

    });

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function(){
      $('.nav-2').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');

      }, 500);
    });

  //     $scope.isActive = false;
  // $scope.activeButton = function() {
  //   $scope.isActive = !$scope.isActive;
  // }  

  // $('.inst-menu-item').on('click', function(){
  //   $(this).toggleClass('active');
  // })



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
  $('body').on('click', '.inst-menu-item', function(){
    $(this).toggleClass('active');
  })


  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('reviews', {
        url: '/reviews',
        parent: 'cafe',
        templateUrl: '../views/pages/institution-reviews.html',
        controller: InstitutionReviewsCtrl
      })
  };
})();