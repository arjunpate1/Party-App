function init() {
    
    // Dreams Framework Functions
    var dreams = new dream();   
    
    dreams.init();

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
    
    // Remove Preloader
    var preloader = removePreloader();
    
    var login = new app();
    
    login.validate();
    
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

function app() {
    
    this.props = {
        loggedIn: false
    }
    
    this.inputs = {
        username: document.getElementById('admin-username'),
        password: document.getElementById('admin-password'),
        submit: document.getElementById('admin-login'),
        form: document.getElementById('admin-form')
    };
    
    this.outputs = {
        error: document.getElementById('admin-login-error')
    };
    
    this.validate = function() {
        
        this.checkUsername = function() {
            
            let value = this.inputs.username.value;
            
            if ( !value ) {
                
                this.inputs.username.style.setProperty('--border-color', 'var(--invalid)');
                this.inputs.username.style.setProperty('--focus-out', 'var(--invalid)');
                
            }
            
            else {
                
                this.inputs.username.style.setProperty('--border-color', 'var(--valid)');
                this.inputs.username.style.setProperty('--focus-out', 'var(--valid)');
                
            }
            
        }.bind(this);
        
        this.checkPassword = function() {
            
            let value = this.inputs.password.value;
            
            if ( !value ) {
                
                this.inputs.password.style.setProperty('--border-color', 'var(--invalid)');
                this.inputs.password.style.setProperty('--focus-out', 'var(--invalid)');
                
            }
            
            else {
                
                this.inputs.password.style.setProperty('--border-color', 'var(--valid)');
                this.inputs.password.style.setProperty('--focus-out', 'var(--valid)');
                
            }
            
        }.bind(this);
        
        this.submitForm = function(e) {
            
            e.preventDefault();
            
            this.checkPassword();
            this.checkUsername();
            
            let username = this.inputs.username.value;
            
            let password = this.inputs.password.value;
            
            if ( !username || !password ) {
                
                this.outputs.error.textContent = "Please enter both a username and password.";
                
            }
            
            else {
                
                $.ajax({
                    type:'post',
                    url:'assets/php/login.php',
                    data:{
                        search:"yes",
                        username: username,
                        password: password
                    },

                    success:function(response) {

                        if(response=="fail") {

                            console.log("email isnt there");


                        }

                        else {

                            var obj = JSON.parse(response);

                        }
                        
                    }.bind(this)

                });
                
            }
            
        }.bind(this);
        
        this.checkLogin = function() { }
        
        this.addListeners = function() {
            
            this.inputs.username.addEventListener("input", this.checkUsername);
            
            this.inputs.password.addEventListener("input", this.checkPassword);
            
            this.inputs.form.addEventListener("submit", this.submitForm);
            
        }.bind(this);
        
        this.addListeners();
        
    }
    
}


window.addEventListener("load", init);