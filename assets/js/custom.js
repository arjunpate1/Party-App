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
    
    var bookingApp = new initBookingApp();
    
    bookingApp.navigate();
    
    var preloader = new removePreloader();
    
}

function removePreloader() {
    
    this.preloader = document.getElementById("preloader-main");
    
    this.loader = document.getElementById("preload-ghost");
    
    
    setTimeout(function(){
        
        this.loader.style.opacity = "0";
        
    }.bind(this), 1500);
    
    setTimeout(function(){
        
        this.preloader.style.opacity = "0";
        this.preloader.style.setProperty("pointer-events", "none");
        document.body.classList.remove("app-active");
        
    }.bind(this), 2500);
    
    setTimeout(function(){
        
        this.preloader.style.display = "none";
        
    }.bind(this), 3500);
    
    
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
    
    var options = {
        zoom: 16,
        center: home,
        styles: theme,
        disableDefaultUI: true
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

function initBookingApp() {
    
    // Define User 
    this.user = {
        name: undefined,
        email: undefined,
        subscribed: false,
        host: undefined,
        agreed: false,
        payment: undefined,
        status: undefined
    }
    
    this.inputs = {
        form: document.getElementById('login-form'),
        name: document.getElementById('name-field'),
        email: document.getElementById('email-field'),
        sub: document.getElementById('subscribe')
     };
    
    this.elements = {
        app: document.getElementById("login-window"),
        pages: document.querySelectorAll(".rspv"),
        back: document.getElementById("rspv-back"),
        open: document.getElementById("rspv-app-launch"),
        buttons: document.querySelectorAll(".rspv-next")
    };
    
    this.props = {
        currentPage: 0,
        validLogin: false
    };
    
    this.navigate = function() {
        
        // Simplify Current Page
        let targets = this.elements.pages;
        
        let buttons = this.elements.buttons;
        
        // Open App
        this.openApp = function() {
            
            // Fix Body Positioning
            document.body.classList.add("app-active");
            
            // Activate App
            this.elements.app.classList.remove("inactive");
            this.elements.app.classList.add("active");
            
        }.bind(this);
        
        // Close App
        this.closeApp = function() {
            
            // Deactivate App
            this.elements.app.classList.remove("active");
            this.elements.app.classList.add("inactive");
            
            // Remove Body Positioning
            document.body.classList.remove("app-active");
            
        }.bind(this);
        
        // Go Back a Page or Close App
        this.goBack = function() {
            
            if ( this.props.currentPage > 0 ) {
                
                // Move Out Home Page
                targets[this.props.currentPage].classList.remove("current");
                targets[this.props.currentPage].classList.add("next");
                
                // Decrement Page Number
                this.props.currentPage--;
                
                // Move In New page
                targets[this.props.currentPage].classList.remove("prev");
                targets[this.props.currentPage].classList.add("current");
                
            }
            
            else {
                
                this.closeApp();
                
            }
            
        }.bind(this);
        
        // Go Forward a Page
        this.goForward = function() {
            
            console.log('yeet');
            
            targets[this.props.currentPage].classList.remove("current");
            targets[this.props.currentPage].classList.add("prev");
            
            this.props.currentPage++;
            
            targets[this.props.currentPage].classList.remove("next");
            targets[this.props.currentPage].classList.add("current");
            
        }.bind(this);
        
        // Prevent Form Submission
        this.preventSubmit = function(e) {
            
            e.preventDefault();
            
        }.bind(this);
        
        // Add Event Listeners
        this.addListeners = function() {
            
            this.elements.back.addEventListener("click", this.goBack);
        
            this.elements.open.addEventListener("click", this.openApp);
            
            this.inputs.form.addEventListener("submit", this.preventSubmit);
            
            for (var i = 0; i < buttons.length; i++) {
                
                buttons[i].addEventListener("click", this.goForward);
                
            }
            
        }.bind(this);
        
        this.addListeners();
        
    };
    
    
    this.validateInputs = function() {
        
    };
    
    
}

window.addEventListener("load", init);