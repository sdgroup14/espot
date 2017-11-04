(function() {
  'use strict';

  angular
    .module('espot.institution', [
      'ui.router',
       'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('InstitutionCtrl', InstitutionCtrl);

  InstitutionCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', 'CafeIdService'];

  function InstitutionCtrl($scope, $rootScope, $timeout, $http, CafeIdService) {
    // $('.institution-content').height($(window).height() - 110);
    // console.log(CafeIdService.getId());


    // $timeout(function(){
      // $rootScope.pageTitle = "О ЗАВЕДЕНИИ";
      // $('.nav-1').removeClass('nav-show');
      // $('.nav-2').addClass('nav-show');
      // $('.logo').addClass('start-page-logo');
      // $('.page-title').addClass('active');
      // }, 100);


    // $rootScope.$on('$locationChangeStart', function(evt) {
    //   $('.page-title').removeClass('active');

    // });

    // $rootScope.$on('$locationChangeSuccess', function(evt) {
    //   $timeout(function(){
    //     $('.nav-1').removeClass('nav-show');
    //   $('.nav-2').addClass('nav-show');
    //   $('.logo').addClass('start-page-logo');
    //   $('.page-title').addClass('active');

    //   }, 100);
    // });


// $http({
//       method: 'post',
//       data: '{"id":'+CafeIdService.getId()+'}',
//       url: 'https://api.icreations.agency/cafe'
//     }).then(function(response) {
//       $scope.dataCafeInfo = response.data;
//       console.log($scope.dataCafeInfo);
//       $scope.getStarsCafeArr = Array;
//       $scope.starsNum = +response.data.placeRate;
//     }, function(error) {
//       console.log(error);
//     });


  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('institution', {
        url: '/search/:cafe',
        template: '<div ui-view class="view-content"></div>',
        controller: InstitutionCtrl,
        redirectTo: 'institution-info'
      })
  };
})();