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

function initMappy() {
        var myLatLng = {lat: -25.363, lng: 131.044};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }

function initMap() {
    
    var home = {lat: -25.363, lng: 131.044};
    
    var options = {
        zoom: 13,
        center: home
    };
    
    var selector = document.querySelector("#map");
    
    var map = new google.maps.Map(selector, options);
    
    var marker = new google.maps.Marker({
        position: home,
        map: map,
        title: "Arjun's House"
    });
    
}

window.addEventListener("load", init);