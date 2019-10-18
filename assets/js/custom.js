function init() {
    
    // Dreams Framework Functions
    var dreams = new dream();   
    
    dreams.init();

    dreams.countdownTimer({
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
    
    dreams.dynamicCursor({
        useDefaultStyle: true,
        size: "6rem",
        color: "var(--primary)",
        borderStle: "3px solid",
        transition: "top .1s, left .1s, transform .1s, opacity .3s ease-in, border .8s ease-in",
        invertedColor: "#fff",
        scaleUpFactor: "1.2",
        scaleDownFactor: ".8",
        cursorFadeInDelay: 1000,
        hideCursorElements: ["a", ".nocursor", "button", ".pick-host__option", ".payment__radio"],
        scaleUpCursorElements: ["h1", "h2", "h3", ".bigcursor"],
        scaleDownCursorElements: ["p"],
        invertCursorElements: [".invertcursor"]
    });
    
    
    // App Wizard
    var app = new wizard();
    
    app.navigate();
    
    app.validate();
    
    app.getSession();
    
    // Remove Preloader
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
    var selector2 = document.getElementById("map-2");
    
    var map = new google.maps.Map(selector, options);
    
    var map2 = new google.maps.Map(selector2, options);
    
    var marker = new google.maps.Marker({
        position: home,
        map: map,
        title: "Arjun's House",
        animation:google.maps.Animation.BOUNCE
    });
    
    var marker2 = new google.maps.Marker({
        position: home,
        map: map2,
        title: "Arjun's House",
        animation:google.maps.Animation.BOUNCE
    });
    
    marker.addListener("click", function(){
        window.open(url, '_blank');
    });
    
    marker2.addListener("click", function(){
        window.open(url, '_blank');
    });
    
}

function wizard() {
    
    // Define User Fields To Be Submitted
    this.user = {
        name: undefined,
        email: undefined,
        subscribed: false,
        hosts: [],
        payment: undefined,
        status: 'unregistered',
        code: undefined
    }
    
    // Define Inputs Elements
    this.inputs = {
        form: document.getElementById('login-form'),
        name: document.getElementById('name-field'),
        email: document.getElementById('email-field'),
        sub: document.getElementById('subscribe'),
        hosts: document.getElementsByName('invitees'),
        payments: document.getElementsByName('payment-options'),
        temail: document.getElementById('tix-email-field'),
        tform: document.getElementById('tix-login-form')
     };
    
    this.outputs = {
        msg: document.getElementById('tix-msg'),
        name: document.getElementById('u-name'),
        email: document.getElementById('u-email'),
        code: document.getElementById('u-code'),
        status: document.getElementById('u-status')
    }
    
    // Define Navigation Elements
    this.elements = {
        app: document.getElementById("login-window"),
        ticket: document.getElementById("ticket-window"),
        userinfo: document.getElementById('logout-window'),
        pages: document.querySelectorAll(".rspv"),
        back: document.getElementById("rspv-back"),
        open: document.getElementById("rspv-app-launch"),
        buttons: document.querySelectorAll(".rspv-next"),
        openTicket: document.getElementById('ticket-view-launch'),
        openUser: document.getElementById('logout-btn'),
        complete: document.getElementById('rspv-complete'),
        closeTicket: document.getElementById('tix-back'),
        closeUser: document.getElementById('logout-back'),
        tixPages: document.querySelectorAll(".v-ticket"),
        prepayInfo: document.getElementById('prepay-info'),
        logoutBack: document.getElementById('logout-back'),
        userTix: document.getElementById('ticket-view-launch-2'),
        goodbye: document.getElementById('logout-app-btn')
    };
    
    // Define Navigation Properties
    this.props = {
        isValid: [],
        currentPage: 0,
        validName: false,
        validEmail: false,
        showTix: false,
        tixViewed: false,
        isRegistered: false
    };
    
    for ( var i = 0; i < this.elements.pages.length; i++ ) {
        
        this.props.isValid[i] = false;
        
    }
    
    // Default Valid Slides
    this.props.isValid[2] = true;
    
    this.navigate = function() {
        
        // Simplify Current Page
        let targets = this.elements.pages;
        
        // Simplify Button Calls
        let buttons = this.elements.buttons;
        
        // Open Ticket
        this.openTicket = function() {
            
            document.body.classList.add("app-active");
            
            this.elements.ticket.classList.remove("inactive");
            this.elements.ticket.classList.add("active");
            
            this.displayTix();
            
        }.bind(this);
        
        // Close Ticket
        this.closeTicket = function() {
            
            this.elements.ticket.classList.remove("active");
            this.elements.ticket.classList.add("inactive");
            
            document.body.classList.remove("app-active");
            
        }.bind(this);
        
        // Open User
        this.openUser = function() {
            
            document.body.classList.add("app-active");
            
            this.elements.userinfo.classList.remove("inactive");
            this.elements.userinfo.classList.add("active");
            
        }.bind(this);
        
        // Close user
        this.closeUser = function() {
            
            this.elements.userinfo.classList.remove("active");
            this.elements.userinfo.classList.add("inactive");
            
            document.body.classList.remove("app-active");
            
        }.bind(this);
        
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
            
            if ( this.props.currentPage == ( this.elements.pages.length - 1 ) ) {
                
                this.closeApp();
                
            }
            
            else if ( this.props.currentPage > 0 ) {
                
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
            
            if ( this.props.currentPage == 1 && !this.props.isValid[1] ) {
                
                document.getElementById('select-host-error').classList.remove('inactive');
                document.getElementById('select-host-error').classList.add('active');
                
            }
            
            if ( this.props.currentPage == ( this.elements.pages.length - 2 ) ) {
                this.register();
            }
            
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
            
            this.checkIfUserExists();
            
        }.bind(this);
        
        // View Ticket After Registration
        this.viewTix = function() {
            
            this.props.showTix = true;
            
            this.closeApp();
            this.openTicket();
            
        }.bind(this);
        
        // Find Ticket
        this.findTix = function() {
            
            this.closeUser();
            this.openTicket();
            
        }.bind(this);
        
        // Control Ticket View
        this.displayTix = function() {
            
            this.outputs.name.textContent = this.user.name;
            this.outputs.email.textContent = this.user.email;
            this.outputs.code.textContent = this.user.code;
            this.outputs.status.textContent = this.user.status;
            
            if ( this.props.showTix && !this.props.tixViewed ) {
                
                this.elements.tixPages[0].classList.remove("current");
                this.elements.tixPages[0].classList.add("prev");
                
                this.elements.tixPages[1].classList.remove("next");
                this.elements.tixPages[1].classList.add("current");
                
                this.props.tixViewed = true;
                
            }
            
        }.bind(this);
        
        this.logout = function() {
            
            let hello = document.getElementById('goodbye-fo');
            let goodbye = document.getElementById('goodbye-fi');
            
            hello.classList.remove("active");
            hello.classList.add("inactive");
            
            this.loggedOut();
            
            setTimeout(function(){
                
                goodbye.classList.remove("inactive");
                goodbye.classList.add("active");
                
            }, 750);
            
            setTimeout(this.closeUser, 2000);
            
            // Reset It
            setTimeout(function(){
                
                hello.classList.remove("inactive");
                hello.classList.add("active");
                
                goodbye.classList.remove("active");
                goodbye.classList.add("inactive");
                
            }, 3000);
            
        }.bind(this);
        
        // Add Event Listeners
        this.addListeners = function() {
            
            this.elements.back.addEventListener("click", this.goBack);
        
            this.elements.open.addEventListener("click", this.openApp);
            
            this.elements.openTicket.addEventListener("click", this.openTicket);
            
            this.inputs.form.addEventListener("submit", this.moveOnSubmit);
            
            this.elements.complete.addEventListener("click", this.viewTix);
            
            this.elements.closeTicket.addEventListener("click", this.closeTicket);
            
            this.elements.openUser.addEventListener("click", this.openUser);
            
            this.elements.logoutBack.addEventListener("click", this.closeUser);
            
            this.elements.userTix.addEventListener("click", this.findTix);
            
            this.elements.goodbye.addEventListener("click", this.logout);
            
            for (var i = 0; i < buttons.length; i++) {
                
                buttons[i].addEventListener("click", this.goForward);
                
            }
            
        }.bind(this);
        
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
        
        this.checkTixEmail = function() {
            
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            
            let value = this.inputs.temail.value;
            
            if ( regex.test(value) && value ) {
                
                this.inputs.temail.style.setProperty('--border-color', 'var(--valid)');
                this.inputs.temail.style.setProperty('--focus-out', 'var(--valid)');
                
                //this.props.validEmail = true;
                
            }
            
            else {
                
                this.inputs.temail.style.setProperty('--border-color', 'var(--invalid)');
                this.inputs.temail.style.setProperty('--focus-out', 'var(--invalid)');
                
                //this.props.validEmail = false;
                
            }
            
            //this.user.email = value;
            
        }.bind(this);
        
        // Check if User Already Registered
        this.checkIfUserExists = function() {
            
            let duplicateError = document.getElementById('user-duplicate');
            
            let looksGood = false;
            
            let email = this.user.email;
            
            let that = this;
            
            this.search({
                email: email,
                
                onSuccess: function() {
                    
                    this.props.validEmail = false;
                    this.inputs.email.style.setProperty('--border-color', 'var(--invalid)');
                    this.inputs.email.style.setProperty('--focus-out', 'var(--invalid)');
                    duplicateError.textContent = "Sorry, you've already registered for the party with that email";
                    this.checkForm();
                    
                }.bind(this),
                
                
                onFail: function() {
                    
                    this.props.validEmail = true;
                    this.checkForm();
                    this.goForward();
                    
                }.bind(this)
            });
            
        };
        
        // Check For Subscribe Checkbox
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
        
        // Check Hosts
        this.checkHosts = function(e) {
            
            let targets = this.inputs.hosts;
            
            let hosts = [];
            
            let error = document.getElementById('select-host-error');
            
            for ( var i = 0; i < targets.length; i++ ) {
                
                if ( targets[i].checked ) {
                    
                    hosts.push(targets[i].value);
                    
                }
                
            }
            
            this.user.hosts = hosts;
            
            if ( !hosts.length ) {
                this.props.isValid[1] = false;
            }
            
            else {
                this.props.isValid[1] = true;
                error.classList.remove('active');
                error.classList.add('inactive');
            }
            
        }.bind(this);
        
        // Check Payment Choice
        this.checkPayments = function(e) {
            
            if ( e.target.checked ) {
                this.user.payment = e.target.value;
            }
            
            this.props.isValid[3] = true;
            
            if ( this.user.payment == 'prepay' ) {
                this.user.status = "Pending";
                this.outputs.msg.textContent = ".";
                this.elements.prepayInfo.classList.remove("inactive");
                this.elements.prepayInfo.classList.add("active");
            }
            
            else if ( this.user.payment == 'door' ) {
                this.user.status = "Pay At Door";
                this.outputs.msg.textContent = " as well as $10 in cash.";
            }
            
            else {
                this.user.status = "BYOB or Pay At Door";
                this.outputs.msg.textContent = " as well as your alcohol of choice or $10 for entry.";
            }
            
        }.bind(this);
        
        // Search if Email Exists
        this.submitSearch = function(e) {
            
            e.preventDefault();
            
            let email = this.inputs.temail.value;
            
            this.search({
                email: email,
                
                onSuccess: function(data) {
                    
                    // Navigate To Next Slide And Show Ticket
                    console.log(data);
                    
                    this.user.name = data.name;
                    this.user.email = email;
                    this.user.hosts = data.hosts;
                    this.user.subscribed = data.subscribed;
                    this.user.payment = data.payment;
                    this.user.status = data.status;
                    this.user.code = data.code;                    
                    
                    this.props.showTix = true;
                    this.displayTix();
                    this.loggedIn();
                    
                }.bind(this),
                
                
                onFail: function() {
                    
                    // Display Error Message
                    
                    this.inputs.temail.style.setProperty('--border-color', 'var(--invalid)');
                    this.inputs.temail.style.setProperty('--focus-out', 'var(--invalid)');
                    
                    document.getElementById('user-not-registered').textContent = "Either your email is incorrect, or you haven't registered for the party yet.";
                    
                }.bind(this)
            });
            
        }.bind(this);
        
        // Add Event Listeners
        this.addListeners = function() {
            
            // On Input
            this.inputs.name.addEventListener("input", this.checkName);
            this.inputs.email.addEventListener("input", this.checkEmail);
            this.inputs.temail.addEventListener("input", this.checkTixEmail);
            
            // On Blur
            this.inputs.name.addEventListener("blur", this.checkName);
            this.inputs.email.addEventListener("blur", this.checkEmail);
            this.inputs.temail.addEventListener("blur", this.checkTixEmail);
            
            // Checkbox Listener
            this.inputs.sub.addEventListener("change", this.checkSubscribe);
            
            // On Submit
            this.inputs.form.addEventListener("submit", this.preventSubmit);
            this.inputs.tform.addEventListener("submit", this.submitSearch);
            
            // Host Select
            for ( var i = 0; i < this.inputs.hosts.length; i++ ) {
                
                this.inputs.hosts[i].addEventListener("change", this.checkHosts);
                
            }
            
            // Payment Select
            for ( var i = 0; i < this.inputs.payments.length; i++ ) {
                
                this.inputs.payments[i].addEventListener("change", this.checkPayments);
                
            } 
            
        }.bind(this);
        
        // Initialize
        this.addListeners();
        
    };
    
    this.register = function() {
        
        this.user.code = "AFBB";
        
        let thus = this;
        
        let invitees = this.user.hosts.toString();
        
        this.updateConfirmation = function(code) {
            
            $.ajax({
                type:'post',
                url:'assets/php/update.php',
                data:{
                    update_code: "true", 
                    email: this.user.email,
                    code: code
                },

                success:function(response) {

                    if(response == "success") {
                        console.log('It should have updated the confirmation code, check the db');
                        console.log(response);
                    }

                    else {
                        console.log('Something Went Wrong');
                        console.log(response);
                    }

                }
            });
            
        }.bind(this);
        
        $.ajax({
            type:'post',
            url:'assets/php/register.php',
            data:{
                create_account: "true", 
                name:thus.user.name,
                email: thus.user.email,
                subscribed: thus.user.subscribed,
                hosts: invitees,
                payment: thus.user.payment,
                status: thus.user.status,
                code: thus.user.code
            },

            success:function(response) {

                if(response == "success") {
                    console.log('It should have worked, check the db');
                    console.log(response);
                }

                else {
                    console.log('Something Went Wrong');
                    console.log(response);
                }

            }
        }).done(function(){
            
            this.search({
                
                email: this.user.email,
                
                onSuccess: function(data) {
                    
                    let id = data.id;
                    
                    if ( id < 10 ) {
                        id = "0" + id;
                    }
                    
                    this.user.code = this.user.code + id;
                    
                    this.updateConfirmation(this.user.code);
                    
                    //this.sendEmail();
                    
                    this.loggedIn();
                    
                }.bind(this),
                
                onFail: function() {
                    
                    console.log("something went wrong");
                    
                }.bind(this)
                
            });
            
        }.bind(this));
        
    };
    
    this.search = function(props) {
        
        /*
        email: string
        onSuccess: function
        onFail: function
        */
        
         $.ajax({
            type:'post',
            url:'assets/php/search.php',
            data:{
                search:"yes",
                email: props.email
            },

            success:function(response) {

                if(response=="fail") {

                    console.log("email isnt there");
                    
                    props.onFail();

                }

                else {

                    var obj = JSON.parse(response);
                    
                    props.onSuccess(obj);

                }
            }.bind(this)

        });

    }.bind(this);
    
    this.loggedIn = function() {
        this.elements.open.style.display = "none";
        this.elements.openTicket.classList.remove("button--secondary");
        this.elements.openTicket.classList.add("button--primary");
        this.elements.openUser.style.display = "block";
        this.elements.openUser.textContent = "Hi " + this.user.name;
        
        let names = document.querySelectorAll('.user-info-name');
        
        for ( var i = 0; i < names.length; i++ ) {
            names[i].textContent = this.user.name;
        }
        
        document.getElementById('user-info-email').textContent = this.user.email;
        
        if ( this.user.status == "Pending" ) {
            document.getElementById('s-pending').style.display = "block";
        }
    };
    
    this.loggedOut = function() {
        
        this.elements.open.style.display = "block";
        this.elements.openTicket.classList.remove("button--primary");
        this.elements.openTicket.classList.add("button--secondary");
        this.elements.openUser.style.display = "none";
        this.props.showTix = false;
        
        this.user.name = undefined;
        this.user.email = undefined;
        this.user.subscribed = false;
        this.user.hosts = [];
        this.user.payment = undefined;
        this.user.status = undefined;
        this.user.code = undefined;
        
        this.props.currentPage = 0;
        
        $.ajax({
            type:'post',
            url:'assets/php/clear.php',
            data:{
                check_login:"yes"
            },

            success:function(response) {

                if(response=="cleared") {

                    console.log("Cleared Out Session");

                }

                else {

                    console.log("Not sure what happened there");

                }
                
            }.bind(this)

        });
        
    };
    
    this.getSession = function() {

        $.ajax({
            type:'post',
            url:'assets/php/cookies.php',
            data:{
                check_login:"yes"
            },

            success:function(response) {

                if(response=="fail") {

                    console.log("Not a returning visitor");

                }

                else {

                    var obj = JSON.parse(response);
                    
                    console.log(obj);
                    
                    this.user.email = obj.email;
                    this.user.name = obj.name;
                    this.user.code = obj.code;
                    this.user.status = obj.status;
                    this.props.showTix = true;
                    
                    this.loggedIn();

                }
            }.bind(this)

        });
        
    };
    
    this.sendEmail = function() {
        
        $.ajax({
            type:'post',
            url:'assets/php/mailto.php',
            data:{
                check_login:"yes",
                email: this.user.email,
                name: this.user.name
            },

            success:function(response) {

                if(response=="success") {

                    console.log("Mail Should Be Sent");

                }

                else {

                    console.log("something went wrong");
                    
                }
            }.bind(this)

        });
        
    };
    
}

window.addEventListener("load", init);