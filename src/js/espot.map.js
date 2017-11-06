(function() {
  'use strict';

  angular
    .module('espot.map', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http'];

  function MapCtrl($scope, $rootScope, $timeout, $http, CafeIdService) {
        $rootScope.$on('$viewContentLoading',
      function(event, viewConfig) {
        $('.spinner').fadeIn(1);
      });


    $scope.$on('$viewContentLoaded',
      function(event) {
        $('.spinner').fadeOut(1);
      });
    // $('.institution-content').height($(window).height() - 110);
    // console.log(CafeIdService.getId());
    // $('#mapAll').height($('.map .container').height());
$timeout(function() {
      $rootScope.pageTitle = "on map";
      $('.nav-2').removeClass('nav-show');
      $('.nav-1').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
    }, 100);


    $rootScope.$on('$locationChangeStart', function(evt) {
      // $('.page-title').removeClass('active');

    });

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function() {
        $('.nav-2').removeClass('nav-show');
        $('.nav-1').addClass('nav-show');
        $('.logo').addClass('start-page-logo');
        $('.page-title').addClass('active');

      }, 100);
    });


    $http({
      method: 'get',
      url: 'https://api.icreations.agency/cafemap'
    }).then(function(response) {
      // $scope.dataSearch = response.data;

      
      //Этой функцией определяем своё местоположение по GPS/IP
      function getCoords() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var startCoords = { lat: position.coords.latitude, lng: position.coords.longitude }
            return initMap(startCoords);
          });
        } else {
          //Если геолокация отключена назначаем стандартное местоположение
          return initMap({ lat: 38.773211, lng: -9.095129 });
        }
      };
      getCoords();

      function initMap(coords) {
        var startCoords = coords;
        var center = startCoords; //Координаты центра карты
        var zoom = 16;

        var iamPlace = startCoords; //Моё местоположение

        //Инициализируем карту выбрав контейнер по Id
        var mapAll = new google.maps.Map(document.getElementById('mapAll'), {
          center: center,
          zoom: zoom,
          disableDefaultUI: true
        });

        /////// Показываем своё местоположение на каре
        var iamMarker = new google.maps.Marker({
          position: iamPlace,
          map: mapAll,
          icon: '../img/map/iamMarker.png' //иконка маркера
        });

        var allMarkersData = response.data;
      // console.log(allMarkersData);

      var log = [];
      var placePos = [];
      var marker = [];
        angular.forEach(allMarkersData, function(value, index) {
          // console.log(value);
          // console.log(index);
          // console.log(value.cafeLat);
          // console.log(value.cafeLng);

          placePos[index] = { lat: (value.cafeLat * 1), lng: (value.cafeLng * 1) };
        marker[index] = new google.maps.Marker({
          position: placePos[index],
          map: mapAll,
          title: 'placePos1'
        });

        console.log(placePos[index]);
        console.log(marker[index]);
        }, log);

      //   var placePos = [];
      // var marker = [];

      // for(var i = 0; i < allMarkersData.length; i++ ){
      //   console.log(allMarkersData[i]);
      //         placePos[i] = { lat: (allMarkersData[i].cafeLat * 1), lng: (allMarkersData[i].cafeLng * 1) };
      //   marker[i] = new google.maps.Marker({
      //     position: placePos[i],
      //     map: mapAll,
      //     title: 'placePos1'
      //   });
      // }


        // * Расставляем маркеры на карте (each для каждой позиции маркера, в конце имени маркера и положения ставим цифровой индекс )
        // var placePos0 = { lat: 50.448008, lng: 30.486137 };
        // var marker0 = new google.maps.Marker({
        //   position: placePos0,
        //   map: mapAll,
        //   title: 'placePos1'
        // });
        // * //Конец цикла для всех маркеров

        //Это инфо окно
        /**
         var infowindow0 = new google.maps.InfoWindow({
                content: '<div><a href="#">Это место 0</a></div>'
            });
         marker0.addListener('click', function() {
                infowindow0.open(mapAll, marker0);
            });
         **/
      }
    }, function(error) {
      console.log(error);
    });






  };

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('map', {
        url: '/map',
        templateUrl: '../views/pages/map.html',
        controller: MapCtrl
      });
    $urlRouterProvider.otherwise('/');
  };
})();