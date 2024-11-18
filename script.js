let spaceship = document.getElementById('spaceship');
let body = document.querySelector('body');

// Geschwindigkeit des Raumschiffs
let speedX = 2;  // Horizontal
let speedY = 2;  // Vertikal

// Startposition des Raumschiffs
let x = window.innerWidth / 2 - spaceship.offsetWidth / 2;
let y = window.innerHeight / 2 - spaceship.offsetHeight / 2;

// Funktion zur Überprüfung von Kollisionen mit den Rändern
function checkCollisionWithBounds() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // Prüfe, ob das Raumschiff den rechten oder linken Rand erreicht
    if (x <= 0 || x + spaceship.offsetWidth >= windowWidth) {
        speedX = -speedX;  // Geschwindigkeit umkehren
    }

    // Prüfe, ob das Raumschiff den oberen oder unteren Rand erreicht
    if (y <= 0 || y + spaceship.offsetHeight >= windowHeight) {
        speedY = -speedY;  // Geschwindigkeit umkehren
    }
}

// Die Animation des Raumschiffs
function moveSpaceship() {
    // Aktualisiere die Position des Raumschiffs
    x += speedX;
    y += speedY;

    checkCollisionWithBounds();

    spaceship.style.left = `${x}px`;
    spaceship.style.top = `${y}px`;

    requestAnimationFrame(moveSpaceship);
}

moveSpaceship();
