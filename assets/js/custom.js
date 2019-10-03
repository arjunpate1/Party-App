function init() {
    
    var countdown1 = new dreamsCountdownTimer({
        selector: "#countdown1",
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
        expiryMessage: "Let's Go"
        
    });
    
    var loginForm;
    
}

window.addEventListener("load", init);