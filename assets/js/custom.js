function init() {
    
    var dreams = new dream();
    
    this.countdown = dreams.countdownTimer({
        selector: "#countdown",
        date: new Date("Oct 25, 2019 20:00:00"),
        showDays: true,
        showHours: true,
        showMinutes: true,
        showSeconds: true,
        daysText: "days",
        hoursText: ":",
        minutesText: ":",
        secondsText: "",
        compact: true,
        expiryMessage: "Any minute now"
    });
    
    this.cursor = dreams.dynamicCursor({
        useDefaultStyle: true,
        size: "6rem",
        color: "var(--primary)",
        borderStle: "3px solid",
        transition: "top .1s, left .1s, transform .1s, opacity .3s ease-in, border .8s ease-in",
        invertedColor: "#fff",
        scaleUpFactor: "1.2",
        scaleDownFactor: ".8",
        cursorFadeInDelay: 1000,
        hideCursorElements: ["a", ".nocursor", "button"],
        scaleUpCursorElements: ["h1", "h2", "h3", ".bigcursor"],
        scaleDownCursorElements: ["p"],
        invertCursorElements: [".invertcursor"]
    });
    
    /*
    this.backgroundVideo = dreams.backgroundVideo({
        selector: "#hero",
        fileName: "arjun",
        filePath: "assets/img/video/",
        mp4: true,
        ogv: false,
        webm: true,
        forceMobile: true,
        fallbackImg: "assets/img/arjun.jpg",
        opacity: "1",
        overlay: true,
        overlayColor: "var(--bg-color)",
        overlayOpacity: ".75"
    });
    */
}

function initMap() {
    
    var home = {lat: 28.537103, lng: -81.235810};
    
    var url = "https://www.google.com/maps/place/11007+Siting+Pl,+Orlando,+FL+32825/@28.5370997,-81.2380017,17z/data=!3m1!4b1!4m5!3m4!1s0x88e76664226c95e9:0xdeb528b2e1019c38!8m2!3d28.5370997!4d-81.235813";
    
    var theme = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#e1aa53"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#191A1F"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#e1aa53"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];
    
    console.log(home);
    
    var options = {
        zoom: 16,
        center: home,
        styles: theme
    };
    
    var selector = document.getElementById("map");
    
    var map = new google.maps.Map(selector, options);
    
    var marker = new google.maps.Marker({
        position: home,
        map: map,
        title: "Arjun's House",
        animation:google.maps.Animation.BOUNCE
    });
    
    marker.addListener("click", function(){
        window.open(url, '_blank');
    });
    
}

window.addEventListener("load", init);