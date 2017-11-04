(function() {
  'use strict';

  angular
    .module('espot.search', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('SearchCtrl', SearchCtrl)
  //     .service('CafeIdService', function () {
  //     var _cafe_id = null;
  //     return {
  //         setId: function (id) {
  //             _cafe_id = id;
  //         },
  //         getId: function () {
  //             return _cafe_id;
  //         }
  //     }
  // });

  SearchCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', 'CafeIdService'];

  function SearchCtrl($scope, $rootScope, $timeout, $http, CafeIdService) {
    $('.search-page-result').height($(window).height() - 190);


    $scope.takePlaceId = function(item) {
      CafeIdService.setId(item.currentTarget.getAttribute("data-place-id"))
    };


    $timeout(function() {
      $rootScope.pageTitle = "поиск";
      $('.nav-1').addClass('nav-show');
      $('.nav-2').removeClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
    }, 100);


    $rootScope.$on('$locationChangeStart', function(evt) {
      $('.page-title').removeClass('active');

    });

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function() {
        $('.nav-1').addClass('nav-show');
        $('.nav-2').removeClass('nav-show');
        $('.logo').addClass('start-page-logo');
        $('.page-title').addClass('active');
      }, 100);
    });

    $scope.dataSearch = [];

    // $http({
    //   method: 'get',
    //   url: '../data/search.php'
    // }).then(function(response) {
    //   $scope.dataSearch = response.data;

    // }, function(error) {
    //   console.log(error);
    // });


    $http({
         method: 'get',
         url: 'https://api.icreations.agency/search'
       }).then(function(response) {
         $scope.dataSearch = response.data;
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
      .state('search', {
        url: '/search',
        templateUrl: '../views/pages/search.html',
        controller: SearchCtrl
      })
  };
})();