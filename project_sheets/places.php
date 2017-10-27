<!DOCTYPE html>
<html>
<head>
    <meta name=”robots” content=”noindex, follow”>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, maximum-scale=1">
    <meta http-equiv="cleartype" content="on">
    <title>Places</title>
    <style>
/*         *, html, body, ul, li {
            margin: 0px;
            padding: 0px;
        } */
        #content {
            width: 90%;
            margin: 0 auto;
            font-size: 0;
            line-height: 0;
        }
        #findCity_input {
            display: block;
            background-color: #fff;
            margin: 30px auto;
            font-size: 15px;
            padding: 0 11px 0 13px;
            text-overflow: ellipsis;
            width: 350px;
            height: 48px;
        }
        .pac-logo:after {
            display: none;
        }
        .pac-container {
            border-radius: 3px;
        }
        .pac-item {
            line-height: 37px;
            border: none;
        }
        .pac-icon {
            margin-top: 9px;
        }
        .pac-item:hover {

        }
        .pac-item-selected {

        }
    </style>
</head>
<body>
    <div id="content">
        <input id="findCity_input" class="controls" type="text" placeholder="Search Box">
    </div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnYGKIPOYed3bRlJ_k9Z-hXa8TFr_r7Bg&libraries=places&language=en&callback=initAutocomplete" async defer></script>
    <script>
         function initAutocomplete() {
            var input = document.getElementById('findCity_input');
            var searchbox = new google.maps.places.SearchBox(input, {types: ['(cities)']});
            //var autocomplete = new google.maps.places.Autocomplete(input);
            /*
            var searchbox = new google.maps.places.Autocomplete(input, {
                componentRestrictions: { country: 'fr' }
            });
            */
            

            google.maps.event.addListener(searchbox, 'places_changed', function () {
                var placeInfo = searchbox.getPlaces();
                
                var place = new Object;
                place.viewport = new Object;
                place.geometry = new Object;
                place.place_id = placeInfo[0].place_id;
                place.vicinity = placeInfo[0].vicinity;
                place.name = placeInfo[0].name;
                place.formatted_address = placeInfo[0].formatted_address;
                place.viewport.sw = {'Lat': placeInfo[0].geometry.viewport.f.b, 'Lng':placeInfo[0].geometry.viewport.b.b};
                place.viewport.ne = {'Lat': placeInfo[0].geometry.viewport.f.f, 'Lng':placeInfo[0].geometry.viewport.b.f};
                place.geometry.lat = placeInfo[0].geometry.location.lat();
                place.geometry.lng = placeInfo[0].geometry.location.lng();
                console.log(place);
                /*
                var service = new google.maps.places.PlacesService(input);
                var request = {
                  placeId: place.place_id
                };

                service.getDetails(request, getDetails);

                function getDetails (place, status) {
                    console.log(place);
                }
                */
            });



            /*var viewport = new google.maps.LatLngBounds(
                new google.maps.LatLng(southLat, westLng),
                new google.maps.LatLng(northLat, eastLng)
            );*/
         }
    </script>
    <!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbuSjSAIif0CB0GNuob2bfG1jd1y9FdxE&libraries=places&callback=initAutocomplete" async defer></script>-->
</body>
</html>
