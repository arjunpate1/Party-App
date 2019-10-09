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
        daysTextSingular: "day",
        hoursText: ":",
        hoursTextSingular: "",
        minutesText: ":",
        minutesTextSingular: ":",
        secondsText: "",
        secondsTextSingular: "",
        compact: true,
        expiryMessage: "It's Party Time"
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
        hideCursorElements: ["a", ".nocursor", "button", ".pick-host__option"],
        scaleUpCursorElements: ["h1", "h2", "h3", ".bigcursor"],
        scaleDownCursorElements: ["p"],
        invertCursorElements: [".invertcursor"]
    });
    
    var app = new wizard();
    
    app.navigate();
    
    app.validate();
    
    var preloader = removePreloader();
    
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

function wizard() {
    
    // Define User Fields To Be Submitted
    this.user = {
        name: undefined,
        email: undefined,
        subscribed: false,
        host: undefined,
        agreed: false,
        payment: undefined,
        status: undefined
    }
    
    // Define Inputs Elements
    this.inputs = {
        form: document.getElementById('login-form'),
        name: document.getElementById('name-field'),
        email: document.getElementById('email-field'),
        sub: document.getElementById('subscribe')
     };
    
    // Define Navigation Elements
    this.elements = {
        app: document.getElementById("login-window"),
        pages: document.querySelectorAll(".rspv"),
        back: document.getElementById("rspv-back"),
        open: document.getElementById("rspv-app-launch"),
        buttons: document.querySelectorAll(".rspv-next")
    };
    
    // Define Navigation Properties
    this.props = {
        isValid: [],
        currentPage: 0,
        validName: false,
        validEmail: false
    };
    
    for ( var i = 0; i < this.elements.pages.length; i++ ) {
        
        this.props.isValid[i] = false;
        
    }
    
    this.navigate = function() {
        
        // Simplify Current Page
        let targets = this.elements.pages;
        
        // Simplify Button Calls
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
            
            if ( this.props.isValid[this.props.currentPage] ) {
                
                targets[this.props.currentPage].classList.remove("current");
                targets[this.props.currentPage].classList.add("prev");

                this.props.currentPage++;

                targets[this.props.currentPage].classList.remove("next");
                targets[this.props.currentPage].classList.add("current");
                
            }
            
        }.bind(this);
        
        // Prevent Form Submission
        this.moveOnSubmit = function(e) {
            
            e.preventDefault();
            
            console.log(this.user);
            
            this.goForward();
            
        }.bind(this);
        
        // Add Event Listeners
        this.addListeners = function() {
            
            this.elements.back.addEventListener("click", this.goBack);
        
            this.elements.open.addEventListener("click", this.openApp);
            
            this.inputs.form.addEventListener("submit", this.moveOnSubmit);
            
            for (var i = 0; i < buttons.length; i++) {
                
                buttons[i].addEventListener("click", this.goForward);
                
            }
            
        }.bind(this);
        
        this.testMeOut = function() {
            console.log("whats up bitches");
        };
        
        // Initialize
        this.addListeners();
        
    };
    
    
    this.validate = function() {
        
        let that = this;
        
        // Test If Form Is Valid For Submission
        this.checkForm = function() {
            
            // Check First Page
            if ( this.props.validEmail && this.props.validName ) {
                
                this.props.isValid[0] = true;
                
            }
            
            else {
                
                this.props.isValid[0] = false;
                
            }
            
        }.bind(this);
        
        // Check Name Field
        this.checkName = function () {
            
            let regex = /^[a-zA-Z\s]*$/;
            
            let value = this.inputs.name.value;
            
            if ( regex.test(value) && value ) {
                
                // Field Is Valid
                
                this.inputs.name.style.setProperty('--border-color', 'var(--valid)');
                this.inputs.name.style.setProperty('--focus-out', 'var(--valid)');
                
                this.props.validName = true;
                
            }
            
            else {
                
                // Field Is Invalid
                this.inputs.name.style.setProperty('--border-color', 'var(--invalid)');
                this.inputs.name.style.setProperty('--focus-out', 'var(--invalid)');
                
                this.props.validName = false;
                
            }
            
            this.user.name = value;
            
            this.checkForm();
            
            
        }.bind(this);
        
        // Check Email Address Field
        this.checkEmail = function() {
            
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            
            let value = this.inputs.email.value;
            
            if ( regex.test(value) && value ) {
                
                this.inputs.email.style.setProperty('--border-color', 'var(--valid)');
                this.inputs.email.style.setProperty('--focus-out', 'var(--valid)');
                
                this.props.validEmail = true;
                
            }
            
            else {
                
                this.inputs.email.style.setProperty('--border-color', 'var(--invalid)');
                this.inputs.email.style.setProperty('--focus-out', 'var(--invalid)');
                
                this.props.validEmail = false;
                
            }
            
            this.user.email = value;
            
            this.checkForm();
            
        }.bind(this);
        
        // CHeck For Subscribe Checkbox
        this.checkSubscribe = function(e) {
            
            if ( e.target.checked ) {
                
                this.user.subscribed = true;
                
            }
            
            else {
                
                this.user.subscribed = false;
                
            }
            
        }.bind(this);
        
        // Prevent Form Submission
        this.preventSubmit = function(e) {
            
            e.preventDefault();
            
            if ( !this.inputs.name.value ) {
                
                this.inputs.name.style.setProperty('--border-color', 'var(--invalid)');
                this.inputs.name.style.setProperty('--focus-out', 'var(--invalid)');
                
                this.props.validName = false;
                
            }
            
            if ( !this.inputs.email.value ) {
                
                this.inputs.email.style.setProperty('--border-color', 'var(--invalid)');
                this.inputs.email.style.setProperty('--focus-out', 'var(--invalid)');
                
                this.props.validEmail = false;
                
            }
            
            this.checkForm();
            
        }.bind(this);
        
        // Check Options
        this.checkOptions = function() {};
        
        // Add Event Listeners
        this.addListeners = function() {
            
            // On Input
            this.inputs.name.addEventListener("input", this.checkName);
            this.inputs.email.addEventListener("input", this.checkEmail);
            
            // On Blur
            this.inputs.name.addEventListener("blur", this.checkName);
            this.inputs.email.addEventListener("blur", this.checkEmail);
            
            // Checkbox Listener
            this.inputs.sub.addEventListener("change", this.checkSubscribe);
            
            // On Submit
            this.inputs.form.addEventListener("submit", this.preventSubmit);
            
        }.bind(this);
        
        // Initialize
        this.addListeners();
        
    };
    
    
}

window.addEventListener("load", init);