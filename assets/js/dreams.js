// DREAMS COMPONENTS

function dreamsTimePicker(props) {
    
    function createElements() {
        console.log("this doesn't do anything yet");
    }
    
    function appendElements() {
        console.log("this doesn't do anything yet");
    }
    
    function addEventListeners() {
        console.log("this doesn't do anything yet");
    }
    
    function incrementHours() {
        console.log("this doesn't do anything yet");
    }
    
    function validateHours() {
        console.log("this doesn't do anything yet");
    }
    
    function incrementMinutes() {
        console.log("this doesn't do anything yet");
    }
    
    function validateMinutes() {
        console.log("this doesn't do anything yet");
    }
    
    function toggleSuffix() {
        console.log("this doesn't do anything yet");
    }
    
}

function dreamsCountdownTimer(props) {
    
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
    console.log("whats up bitch");
    
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
    
}

function dreamsAccountForm(props) {
    
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
    
}

function dreamesGoogleMaps(props) {}