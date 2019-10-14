// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
      
    if (response.status === 'connected') {
        
      // Logged into your app and Facebook.
      onFacebookSignIn();
        
    } 
    
    else {
        
      // The person is not logged into your app or we are unable to tell.
        //document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
    }
}

  // This function is called when someone finishes with the Login Button
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : facebookID,
        cookie     : true,  // enable cookies to allow the server to access 
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v3.2' // The Graph API version to use for the call
    });


    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function onFacebookSignIn() {
      
    FB.api('/me', 'GET', {fields: 'first_name,last_name,id,picture.width(250).height(250),email'}, function(response) {

        console.log(response);
        
        userInfo.firstName = response.first_name;
        userInfo.lastName = response.last_name;
        userInfo.imageUrl = response.picture.data.url;
        userInfo.email = response.email;
        userInfo.loginMethod = 2;
        console.log(userInfo);
        
        signInSuccess();

    });
}

function facebookSignOut() {
    FB.logout(function(response) {
        signOutSuccess();
    });
}