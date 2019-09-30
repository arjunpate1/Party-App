var calendar = new HelloWeek({
    selector: '.hello-week',
    lang: 'en',
    langFolder: './assets/client_side/js/langs/',
    format: 'MM/DD/YYYY',
    weekShort: false,
    monthShort: false,
    multiplePick: false,
    defaultDate: null,
    todayHighlight: true,
    disablePastDays: true,
    disabledDaysOfWeek: null,
    disableDates: null,
    weekStart: 0, // week start on Sunday
    daysHighlight: null,
    daysSelected: null,
    range: false,
    rtl: false,
    locked: false,
    minDate: null,
    maxDate: null,
    nav: ['◀', '▶'],
    onSelect: () => {

        var tempDate = calendar.getDays();
        
        var dateArray = tempDate[0].split("/");
        
        selectDate(dateArray);
       
       fields.date = true;
        $(".hero__booking__card__form__date").text(reservation.date.spelledShort);
        
    },
    onClear: () => { /** callback function */ }
});
            