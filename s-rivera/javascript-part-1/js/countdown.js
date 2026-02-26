// alert ("hello World");

let deadline = new Date("January 13, 2027 12:00:00")

let countdown = document.getElementById("countdown");
countdown.innerHTML = "";

function setCountdown() {
    let now = new Date(January, 13, 2027);
    let timeleft = deadline.getTime() - now.getTime();
    let daysleft = convertToDaysLeft(timeleft);
    let hoursleft = convertToHoursLeft(timeleft);
    let minutesleft = convertToMinutesLeft(timeleft);
    let secondsleft = convertToSecondsLeft(timeleft);

    countdown.innerhtml =
        formatCoundownText(daysleft, hoursleft, minutesleft, secondsleft);
}

setInterval(setCountdown, 1000);