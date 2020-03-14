


var datePicker = document.getElementById('datePicker');
var calBtn = document.getElementById('calBtn');
var comment = document.getElementById('comment').value;

const picker = datepicker('.picker', {
    formatter: (datePicker, date, instance) => {
        const value = date.toLocaleDateString()
        datePicker.value = value // => '1/1/2099'
        console.log(value);
    },

    id: 1
});
$('#calBtn').on('click', picker.show());
picker.calendarContainer.style.setProperty('font-size', '1.1rem');



function updateTextInput(val) {
    document.getElementById('ratingSlideVal').value = val;
};







