/* SCRIPT */ 

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");


function time() {
    const now = new Date()
    let sec = now.getSeconds()
    let min = now.getMinutes()
    let h = now.getHours()
    const interval = 6

    // CONDITIONALS
    h = (h < 10) ? "0" + h : h
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    // ANALOG CLOCK ANIMATION

    let secInt = sec * interval
    let minInt = min * interval + sec/10
    let hInt = (h * 30) * (min/2)

    seconds.style.transform = "rotate(" + (secInt) + "deg)"
    minutes.style.transform = "rotate(" + (minInt) + "deg)"
    hours.style.transform = "rotate(" + (hInt) + "deg)"

    /* DIGITAL CLOCK */
    let timeNow = h + ":" + min + ":" + sec
    document.getElementById("digital-hour").innerText = timeNow

}

setInterval(time, 100);
