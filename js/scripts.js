/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

var points = [
    [29.3687908,47.9698236],
    [29.256906, 47.955438],
    [29.255858, 47.950717],
    [29.253836, 47.9484],
    [29.252263, 47.946726],
    [29.25099, 47.944709],
    [29.250092, 47.942435],
    [29.249006, 47.940117],
    [29.24807, 47.939216],
    [29.247096, 47.939774],
    [29.366370, 47.968063]
  ];
  
  
  var delay = 100;
  var speed = 50; // km/h
  
  function initMap() {
    var latlng = { lat: points[0][0], lng: points[0][1] };
  
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: latlng
    });
  
    var image =
      { url: "https://homebazar.com/car.svg"}
    var marker = new google.maps.Marker({
      position: latlng,
      map: map, 
      icon: {
          path: SQUARE_PIN,
          fillColor: '#00CCBB',
          fillOpacity: 1,
          strokeColor: '',
          strokeWeight: 0
      },
      map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
    });
  
    var geocoder = new google.maps.Geocoder();
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListenerOnce(map, "idle", function() {
      animateMarker(
        marker,
        [
          // The coordinates of each point you want the marker to go to.
          // You don't need to specify the starting position again.
          [29.256906, 47.955438],
          [29.255858, 47.950717],
          [29.253836, 47.9484],
          [29.252263, 47.946726],
          [29.25099, 47.944709],
          [29.250092, 47.942435],
          [29.249006, 47.940117],
          [29.24807, 47.939216],
          [29.247096, 47.939774]
        ],
        speed
      );
    });
  
    polylineCoords = [];
  
    var startCoords = new google.maps.LatLng(points[0][0], points[0][1]);
  
    polylineCoords.push(startCoords);
  
    path = new google.maps.Polyline({
      path: polylineCoords,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
  
    path.setMap(map);
    
    google.maps.event.addListener(map, 'zoom_changed', function() {
  
      var pixelSizeAtZoom0 = 8; //the size of the icon at zoom level 0
      var maxPixelSize = 350; //restricts the maximum size of the icon, otherwise the browser will choke at higher zoom levels trying to scale an image to millions of pixels
  
      var zoom = map.getZoom();
      var relativePixelSize = Math.round(pixelSizeAtZoom0*Math.pow(2,zoom)); // use 2 to the power of current zoom to calculate relative pixel size.  Base of exponent is 2 because relative size should double every time you zoom in
  
      if(relativePixelSize > maxPixelSize) //restrict the maximum size of the icon
          relativePixelSize = maxPixelSize;
  
      //change the size of the icon
      marker.setIcon(
          new google.maps.MarkerImage(
              marker.getIcon().url, //marker's same icon graphic
              null,//size
              null,//origin
              null, //anchor
              new google.maps.Size(relativePixelSize, relativePixelSize) //changes the scale
          )
      );        
  });
    
  }
  
  function animateMarker(marker, coords, km_h) {
    var target = 0;
    var km_h = km_h || 50;
    coords.push([points[0][0], points[0][1]]);
  
    function goToPoint() {
      var lat = marker.position.lat();
      var lng = marker.position.lng();
      var step = km_h * 1000 * delay / 3600000; // in meters
  
      var dest = new google.maps.LatLng(coords[target][0], coords[target][1]);
  
      var distance = google.maps.geometry.spherical.computeDistanceBetween(
        dest,
        marker.position
      ); // in meters
  
      var numStep = distance / step;
      var i = 0;
      var deltaLat = (coords[target][0] - lat) / numStep;
      var deltaLng = (coords[target][1] - lng) / numStep;
  
      function addCoord(lat, lng) {
        var point = new google.maps.LatLng(lat, lng);
        var coords = path.getPath();
        coords.push(point);
      }
  
      function moveMarker() {
        lat += deltaLat;
        lng += deltaLng;
        i += step;
        addCoord(lat, lng);
        if (i < distance) {
          marker.setPosition(new google.maps.LatLng(lat, lng));
          setTimeout(moveMarker, delay);
        } else {
          marker.setPosition(dest);
          target++;
          if (target == coords.length) {
            target = 0;
          }
  
          setTimeout(goToPoint, delay);
        }
      }
      moveMarker();
    }
    goToPoint();
  }

  var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
  