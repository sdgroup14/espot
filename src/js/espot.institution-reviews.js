(function() {
  'use strict';

  angular
    .module('espot.institution-reviews', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('InstitutionReviewsCtrl', InstitutionReviewsCtrl);

  InstitutionReviewsCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', '$cookies'];

  function InstitutionReviewsCtrl($scope, $rootScope, $timeout, $http, $cookies) {
        $rootScope.$on('$viewContentLoading',
      function(event, viewConfig) {
        $('.spinner').fadeIn(1);
      });


    $scope.$on('$viewContentLoaded',
      function(event) {
        $('.spinner').fadeOut(1);
      });

    $timeout(function() {
      $rootScope.pageTitle = "reviews";
      $('.nav-2').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
    }, 100);

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function() {
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

    $http({
      method: 'get',
      url: 'https://api.icreations.agency/comments'
    }).then(function(response) {
      $scope.dataComments = response.data;
      console.log($scope.dataComments);
       $scope.starsNum = $scope.dataSearch.placeRate;
      console.log(response.data);
      $scope.getStarsCafeArr = Array;
    }, function(error) {
      console.log(error);
    });
    $('body').on('click', '.inst-menu-item', function() {
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