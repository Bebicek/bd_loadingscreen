// Function for lower or higher up sound in background, its working function in script but its not noted in text//
var play = false;
var vid = document.getElementById("loading");
vid.volume = 0.5;
window.addEventListener('keyup', function(e) {
    if (e.which == 40) { // ArrowDOWN
        vid.volume = Math.min(vid.volume + 0.1, 1);
    } else if (e.which == 38) { // ArrowUP
        vid.volume = Math.max(vid.volume - 0.1, 0);
    };
});
// Function for lower or higher up sound in background, its working function in script but its not noted in text//

// Function for pause and play music in background//
var audio = document.querySelector('audio');

if (audio) {

    window.addEventListener('keydown', function(event) {

        var key = event.which || event.keyCode;
        var x = document.getElementById("text").innerText;
        var y = document.getElementById("text");

        if (key === 32 && x == "MUTE") { // spacebar

            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "UNMUTE";

        } else if (key === 32 && x == "UNMUTE") {

            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "MUTE";
        }
    });
}
// Function for pause and play music in background//

//SHADED-TEXT

var shadedText = document.querySelector('.shaded-text');
var texts = ["JOINING SERVER", "PREPARING ASSETS", "ESTABLISHING CONNECTION"];
var currentText = 0;

setInterval(function() {
currentText = (currentText + 1) % texts.length;
shadedText.classList.remove('fade-out');
void shadedText.offsetWidth;
shadedText.classList.add('fade-out');
setTimeout(function() {
shadedText.textContent = texts[currentText];
}, 1000);
}, 10000);