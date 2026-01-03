let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkValue();
}

//increase count function
function displayCount () {
    document.getElementById('countDisplay').innerHTML = count;
}

//check value count and alert triggering
function checkValue() {
    if (count === 10) {
        alert('Your instagram post gained 10 followers! Congratulations')
    } else if (count === 20) {
        alert('Your instagram post gained 20 followers! Keep it up!')
    }
}