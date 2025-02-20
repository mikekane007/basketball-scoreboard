// FOR HOME 
scoreElementHome = document.getElementById("scoreHome")
let scoreHome = 0

function add1PointHome() {
    scoreHome += 1
    scoreElementHome.textContent = scoreHome
}

function add2PointHome() {
    scoreHome += 2
    scoreElementHome.textContent = scoreHome
}

function add3PointHome() {
    scoreHome += 3
    scoreElementHome.textContent = scoreHome
}

// FOR GUEST
scoreElementGuest = document.getElementById("scoreGuest")
let scoreGuest = 0

function add1PointGuest() {
    scoreGuest += 1
    scoreElementGuest.textContent = scoreGuest
}

function add2PointGuest() {
    scoreGuest += 2
    scoreElementGuest.textContent = scoreGuest
}

function add3PointGuest() {
    scoreGuest += 3
    scoreElementGuest.textContent = scoreGuest
}

// RESET BUTTON

function reset() {
    scoreHome = 0
    scoreElementHome.textContent = scoreHome
    scoreGuest = scoreHome
    scoreElementGuest.textContent = scoreGuest

}


