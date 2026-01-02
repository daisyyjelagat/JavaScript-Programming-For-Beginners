// clean this up
let time = 12;
if(time < 12){
    document.getElementById("time-message") = "Good Morning";
} else if (time < 18) {
    document.getElementById("time-message") = "Good Afternoon";
} else {
    document.getElementById("time-message") = "Evening"
}