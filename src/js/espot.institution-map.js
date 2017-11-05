(function() {
  'use strict';

  angular
    .module('espot.institution-map', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('InstitutionMapCtrl', InstitutionMapCtrl);

  InstitutionMapCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http', '$cookies'];

  function InstitutionMapCtrl($scope, $rootScope, $timeout, $http, $cookies) {
        $rootScope.$on('$viewContentLoading',
      function(event, viewConfig) {
        $('.spinner').fadeIn(1);
      });


    $scope.$on('$viewContentLoaded',
      function(event) {
        $('.spinner').fadeOut(1);
      });
    // $('.institution-content').height($(window).height() - 110);
    // $('#dir-map').height($('.institution-map .institution-content').height() - $('.institution-map .institution-header').height());


    $timeout(function() {
      $rootScope.pageTitle = "Где мы находимся";
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

    var coordsCurLat,
      coordsCurLng;
    $http({
      method: 'post',
      data: '{"id":' + $cookies.get("cookiesCafeId") + '}',
      url: 'https://api.icreations.agency/cafe'
    }).then(function(response) {
      $scope.getStarsCafeArr = Array;
      $scope.starsNum = +response.data.placeRate;
      $scope.dataCafeInfo = response.data;
      coordsCurLat = $scope.dataCafeInfo.placeLat * 1;
      coordsCurLng = $scope.dataCafeInfo.placeLng * 1;

      function getCoords() { //Определяет начальные координаты
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var startCoords = { lat: position.coords.latitude, lng: position.coords.longitude }
            return initMap(startCoords); //вызов инициализацации карты
          });
        } else { //если координаты не определяются назначаем стандартные
          return initMap({ lat: 50.4474833, lng: 30.2409454 }); //вызов инициализацации карты
        }
      };
      getCoords();

      function initMap(coords) { //Инициализирует карту
        var startCoords = coords;

        //Координаты кафе
        var cafeCoords = { lat: coordsCurLat, lng: coordsCurLng };

        //Title кафе
        var cafeName = $scope.dataCafeInfo.placeTitle;

        var directionsDisplay;
        var directionsService;
        var directionsMap;
        var end = new google.maps.LatLng(cafeCoords);

        var start = new google.maps.LatLng(startCoords);

        function getDirection() {
          var mapOptions = {
            zoom: 11,
            center: start,
            gestureHandling: 'cooperative',
            mapTypeControl: false,
            zoomControl: true,
            zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_CENTER,
              style: google.maps.ZoomControlStyle.LARGE
            },
            fullscreenControl: false,
            streetViewControl: false
          };
          directionsMap = new google.maps.Map(document.getElementById('dir-map'), mapOptions);

          directionsService = new google.maps.DirectionsService();
          directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true,
            map: directionsMap,
            suppressMarkers: true
          });

          directionsDisplay.addListener('directions_changed', function() {
            computeTotalDistance(directionsDisplay.getDirections());
          });

          calcRoute();
        }

        function displayRoute(start, end, service, display) {
          service.route({
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
          }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              display.setDirections(response);
            } else {
              alert('Could not display directions due to: ' + status);
            }
          });
        }

        function computeTotalDistance(result) {
          var total = 0;
          var myroute = result.routes[0];
          for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
          }
          total = total / 1000;
          console.log(total + ' км');
          var infoWindow = new google.maps.InfoWindow({ map: directionsMap });
          infoWindow.setPosition(cafeCoords);
          infoWindow.setContent(cafeName);
        }

        function calcRoute() {
          var request = {
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
          };
          directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(result);
            }
            new google.maps.Marker({
              position: startCoords,
              map: directionsMap
            });
          });
        }

        getDirection();
      }


    }, function(error) {
      console.log(error);
    });






  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('');
    $stateProvider
      .state('inst-map', {
        url: '/map',
        parent: 'cafe',
        templateUrl: '../views/pages/institution-map.html',
        controller: InstitutionMapCtrl
      });
  };
})();