
var commentSubmit = document.getElementById('commentSubmit');
var calBtn = document.getElementById('calBtn');
const picker = datepicker('.picker', {
    onSelect: instance => {
        picker.hide()
    console.log(instance.dateSelected);
    },
    id:1
});
$('#calBtn').on('click', picker.show());

picker.calendarContainer.style.setProperty('font-size', '1.1rem');