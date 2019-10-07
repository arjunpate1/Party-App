function dream() {
    
// DREAMS MAIN PROPERTY CLASSES
    
    // Initialize Object to Store Properties
    this.props = new Object();
    
    // Keep Track of currently running stacks
    this.stacks = {
        trackMouse: false,
        getBrowserProps: true
    };
    
    // Get Browser Properties
    this.getBrowserProps = function() {
        
        this.checkBrowser = function() {
            
            this.props.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            
            this.props.isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            
            this.props.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            
        };
        
        this.detectMobileDevice = function() {
            
            // COURTESY OF 
            //https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 

                this.props.isMobile = true;
            }

            else {

                this.props.isMobile = false;

            }

            
        };
        
        this.getWindowSize = function() {
            this.props.width = window.innerWidth;
            this.props.height = window.innerHeight;
        };
        
        let me = this;
        
        this.checkBrowser();
        this.detectMobileDevice();
        this.getWindowSize();
        
        window.addEventListener( "resize", function(){
            this.getWindowSize();
        }.bind(this) );
    };
    
    // Track Mouse Position
    this.trackMouse = function() {
        
        this.stacks.trackMouse = true;
        
        this.mouseMove = function(e) {
          
            this.props.x = e.clientX;
            this.props.y = e.clientY;
            
            if ( this.props.x < 0 ) {
                
                this.props.x = 0;
                
            }
            
            else if ( this.props.x > this.props.width ) {
                
                this.props.x = this.props.width;
                
            }
            
        };
        
        window.addEventListener( "mousemove", function(e) {
            
            this.mouseMove(e);
            
        }.bind(this) );
        
    };

    
    
// ASSISTANT CLASSES
    
    // Run Nested Timeout Functions Easier
    this.nestedTimeout = function(fn) {
        // One Day This Will Do Something
    };
    
    
    
// DREAMS COMPONENT CLASSES
    
    // Preloader
    this.preloader = function(props) {
        // Do Some Preloader Shit Here
    };
    
    // Countdown Timer
    this.countdownTimer = function(props) {
        
        /*
    
        selector: string
        date: date object
        showDays: bool
        showHours: bool
        showMinutes: bool
        showSeconds: bool
        daysText: string
        hoursText: string
        minutesText: string
        secondsText: string
        expiryMessage: string

        */

        let element = document.querySelector(props.selector);

        let time = props.date.getTime();

        let timer = {};

        let expired = false;

        function getTimeRemaining() {

            let now = new Date().getTime();

            let delta = time - now;

            timer.days = Math.floor( delta / (1000 * 60 * 60 * 24) );

            timer.hours = Math.floor( (delta % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60) );

            timer.minutes = Math.floor( (delta % (1000 * 60 * 60)) / (1000 * 60) );

            timer.seconds = Math.floor( (delta % (1000 * 60)) / 1000 );

            if (timer.hours < 10) {
                timer.hours = "0" + timer.hours;
            }

            if (timer.minutes < 10) {
                timer.minutes = "0" + timer.minutes;
            }

            if (timer.seconds < 10) {
                timer.seconds = "0" + timer.seconds;
            }

            if (delta < 0) {
                clearInterval(updateCountdown);
                element.innerHTML = props.expiryMessage;
                expired = true;
            }

        }

        function updateElement() {

            getTimeRemaining();

            if (expired) {
                return;
            }

            let text = "";

            if (props.showDays) {
                text = text + timer.days + " " + props.daysText + " ";
            }

            if (props.compact) {
                text = text + "and " + timer.hours + ":" + timer.minutes + ":" + timer.seconds;
            }

            else {

                if (props.showHours) {
                    text = text + timer.hours + " " + props.hoursText + " ";
                }

                if (props.showMinutes) {
                    text = text + timer.minutes + " " + props.minutesText + " ";
                }

                if (props.showSeconds) {
                    text = text + timer.seconds + " " + props.secondsText;
                }

            }

            element.innerHTML = text;

        }

        var updateCountdown = setInterval(updateElement, 1000);
        
    };
    
    // Time Picker
    this.timePicker = function(props) {};
    
    // Calendar
    this.calendar = function(props) {
        // Will be powered by hello-week.js
    };
    
    // Account Forms
    this.accountForm = function(props) {
        
        // Documentation
        /* 
    
        Basic Setup

        selector: string
        createAccount: bool
        login: bool


        Select Fields 

        firstNameField: {enabled: bool, validate: bool, liveValidate: bool, required: bool, label: string}
        lastNameField:{enabled: bool, validate: bool, liveValidate: bool, required: bool, label: string}
        combinedNameField: {enabled: bool, validate: bool, liveValidate: bool, required: bool, label: string}
        usernameField: {enabled: bool, validate: bool, liveValidate: bool, required: bool, label: string}
        emailField: {enabled: bool, validate: bool, liveValidate: bool, required: bool, label: string}
        confirmEmailField: {enabled: bool, validate: bool, liveValidate: bool, required: bool, label: string}
        phoneNumberField: {enabled: bool, validate: bool, liveValidate: bool, required: bool, label: string}
        passwordField: {enabled: bool, validate: bool, liveValidate: bool, required: bool, label: string}
        confirmPasswordField: {enabled: bool, validate: bool, liveValidate: bool, required: bool, label: string}
        googleSignIn: {enabled: bool, apiKey: string},
        facebookSignIn: {enabled: bool, apiKey: string}
        emailSubscribe: bool
        phoneSubscribe: bool


        Display Options

        size: "compact" or "scroll"
        displayLabels: bool

        Submit Options

        onSuccess: function


        */

        let element = document.querySelector(props.selector);

        function createElements() {

        }

        function appendElements() {

        }

        function addEventListeners() {

        }

        var validate = {

            firstName: function() {},

            lastName: function() {},

            combinedName: function() {},

            phone: function() {},

            email: function() {},

            confirmEmail: function() {},

            password: function() {},

            confirmPassword: function() {}

        }

    };
    
    
    
// DREAMS UI CLASSES  
    
    // Dynamic Cursor
    this.dynamicCursor = function(props) {
        
        // Options
        /* OPTIONS
    
        useDefaultStyle: bool
        size: string
        color: string
        borderStyle: string
        inverted: string
        transition: string
        scaleUpFactor: string
        scaleDownFactor: string
        hideCursorElements: array
        scaleUpCursorElements: array
        scaleDownCursorElements: array
        invertCursorElements: array

        */
        
        this.checkCompatibility = function() {
            
            if ( that.props.isMobile ) {
                return false;
            }

            else if ( !that.props.isChrome && !that.props.isSafari && !that.props.isFirefox ) {
                return false;
            }

            else {
                return true;
            }
            
            
        };

        if( !this.checkCompatibility() ) {
            return;
        }

        let cursor = {
            element: undefined,
            scale: "scale(1)"
        };

        this.createCursor = function() {

            let element = document.createElement("div");

            let body = document.body;

            element.setAttribute("id", "dreams-cursor");

            body.insertBefore(element, body.childNodes[0]);

            cursor.element = document.getElementById("dreams-cursor");

            this.setCursorProps();

           if ( !this.stacks.trackMouse ) {
               this.trackMouse();
           }

        }.bind(this);

        this.setCursorProps = function() {

            if ( !props.useDefaultStyle ) {

                cursor.element.style.setProperty('--size', props.size);
                cursor.element.style.setProperty('--color', props.color);
                cursor.element.style.setProperty('--border', props.borderStyle);
                cursor.element.style.setProperty('--transition', props.transition);

            }   

            setTimeout(function(){
                cursor.element.style.opacity = "1";
            }, props.cursorFadeInDelay);

            this.attachListeners();
            requestAnimationFrame(this.animateCursor);

        }.bind(this);

        this.attachListeners = function() {

            function quickAdd(t) {

                for ( var i = 0; i < t.list.length; i++ ) {

                    let nodes = document.querySelectorAll( t.list[i] );

                    for ( var j = 0; j < nodes.length; j++ ) {

                        nodes[j].addEventListener( 'mouseover', t.fx );
                        nodes[j].addEventListener( 'mouseout', t.undo );

                    }

                }

            }

            // Hide Cursor
            quickAdd({
                list: props.hideCursorElements,

                fx: function() {
                    cursor.scale = "scale(0)";
                },

                undo: function() {
                    cursor.scale = "scale(1)";
                }

            });

            // Scale Up Cursor
            quickAdd({
                list: props.scaleUpCursorElements,

                fx: function() {
                    cursor.scale = "scale(" + props.scaleUpFactor + ")";
                },

                undo: function() {
                    cursor.scale = "scale(1)";
                }

            });

            // Scale Down Cursor
            quickAdd({

                list: props.scaleDownCursorElements,

                fx: function() {
                    cursor.scale = "scale(" + props.scaleDownFactor + ")";
                },

                undo: function() {
                    cursor.scale = "scale(1)";
                }

            });

            // Scale Down Cursor
            quickAdd({

                list: props.scaleDownCursorElements,

                fx: function() {
                    cursor.scale = "scale(" + props.scaleDownFactor + ")";
                },

                undo: function() {
                    cursor.scale = "scale(1)";
                }

            });

            // Invert Cursor
            quickAdd({

                list: props.scaleDownCursorElements,

                fx: function() {
                    cursor.element.style.setProperty('--color', props.invertedColor);
                },

                undo: function() {
                    cursor.element.style.setProperty('--color', props.color);
                }

            });

        }.bind(this);

        this.animateCursor = function() {

            cursor.element.style.transform = "translate3d(" + this.props.x + "px, " + this.props.y + "px, 0px) " + cursor.scale;

            requestAnimationFrame(this.animateCursor);

        }.bind(this);

        this.createCursor();
        
    };
    
    // Background Video
    this.backgroundVideo = function(props) {
        
        // Props
        /*
        
        selector: string
        fileName: string // Please make sure all versions (mp4, ogv, webm, etc) have the same filename
        filePath: string
        mp4: bool
        ogv: bool
        webm: bool
        muted: bool
        forceMobile: bool
        fallbackImg: string
        opacity: string
        overlay: bool
        overlayColor: string
        overlayOpacity: string
        
        */
        
        let background = {
            parent: document.querySelector(props.selector),
            element: document.createElement("div"),
            video: document.createElement("video"),
            overlay: document.createElement("div"),
            mp4: undefined,
            ogv: undefined,
            webm: undefined
        }
        
        // Check Device Compatibility For Background Video
        this.checkCompatibility = function() {
            
        };
        
        // Create Background Video Elements
        this.createBgVideo = function() {
            
            this.setVideoAttributes();
          
            if (props.mp4) {
                background.mp4 = document.createElement("source");
                background.mp4.setAttribute("src", props.filePath + props.fileName + ".mp4");
                background.mp4.setAttribute("type", "video/mp4");
                background.video.appendChild(background.mp4);
            }
            
            if (props.ogv) {
                background.ogv = document.createElement("source");
                background.ogv.setAttribute("src", props.filePath + props.fileName + ".ogv");
                background.ogv.setAttribute("type", "video/ogv");
                background.video.appendChild(background.ogv);
            }
            
            if (props.webm) {
                background.webm = document.createElement("source");
                background.webm.setAttribute("src", props.filePath + props.fileName + ".webm");
                background.webm.setAttribute("type", "video/webm");
                background.video.appendChild(background.webm);
            }
            
            background.element.appendChild(background.video);
            
            if (props.overlay) {
                background.element.appendChild(background.overlay);
            }
            
            //console.log(background.parent);
            
            background.parent.insertBefore(background.element, background.parent.childNodes[0]);
            
            background.video.addEventListener("loadeddata", this.playBackgroundVideo);
            
        };
        
        // Set Attributes
        this.setVideoAttributes = function() {
            
            background.element.setAttribute("class", "background-video");
            background.video.setAttribute("class", "background-video__video");
            background.video.setAttribute("muted", "muted");
            background.video.setAttribute("autoplay", "");
            background.video.setAttribute("loop", "");
            
            if (props.forceMobile) {
                background.video.setAttribute("playsinline", "");
            }
            
            background.video.style.setProperty("opacity", "0");
            
            if (props.overlay) {
                
                background.overlay.setAttribute("class", "background-video__overlay");
                background.overlay.style.setProperty("opacity", props.overlayOpacity);
                background.overlay.style.setProperty("background-color", props.overlayColor);
                
            }
            
        };
        
        // Play Background Video
        this.playBackgroundVideo = function() {
            
            background.video.style.setProperty("opacity", props.opacity);
            
            background.video.pause();
            background.video.play();
            
        };
        
        this.createBgVideo();
        
    };
    
    // Google Maps API
    this.googleMaps = function(props) {
        // Google Maps Shit Here
    };
    
    
    
// INIT DREAMS
    
    // Call Browser Props
    this.getBrowserProps();
    
    
    
// CACHE "THIS"
    
    // Define that as this
    let that = this;
    
}