var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");

});

let video = document.querySelector("#player1");

// Initialize the video element and turn off autoplay and looping
video.autoplay = false;
video.loop = false;

// Access the play button
let playButton = document.querySelector("#play");

// Add an event listener to the play button to play the video and update the volume information
playButton.addEventListener("click", function() {
video.play();
updateVolume();
});

// Access the pause button
let pauseButton = document.querySelector("#pause");

// Add an event listener to the pause button to pause the video
pauseButton.addEventListener("click", function() {
video.pause();
});

// Access the slow down button
let slowDownButton = document.querySelector("#slower");

// Add an event listener to the slow down button to slow down the video speed by 10% and log the new speed to the console
let currentSpeed = 1;
slowDownButton.addEventListener("click", function() {
currentSpeed -= 0.1;
video.playbackRate = currentSpeed;
console.log(currentSpeed);
});

// Access the speed up button
let speedUpButton = document.querySelector("#faster");

// Add an event listener to the speed up button to increase the video speed by 10% and log the new speed to the console
speedUpButton.addEventListener("click", function() {
currentSpeed += 0.1;
video.playbackRate = currentSpeed;
console.log(currentSpeed);
});

// Function to update the volume information
function updateVolume() {
	console.log(video.volume);
}

// Access the skip ahead button
let skipAheadButton = document.querySelector("#skip");

// Add an event listener to the skip ahead button to advance the current video by 10 seconds, or go back to the start of the video if the current time is greater than the video length
skipAheadButton.addEventListener("click", function() {
let currentTime = video.currentTime;
let duration = video.duration;
if (currentTime + 10 <= duration) {
video.currentTime += 10;
} else {
video.currentTime = 0;
}
console.log(videoElement.currentTime);
});

// Access the mute button
let muteButton = document.querySelector("#mute");

// Add an event listener to the mute button to mute/unmute the video and update the text in the button
muteButton.addEventListener("click", function() {
if (video.muted) {
video.muted = false;
muteButton.innerText = "Mute";
} else {
video.muted = true;
muteButton.innerText = "Unmute";
}
});

// Access the volume slider
let volumeSlider = document.querySelector("#slider");

// Add an event listener to the volume slider to change the volume based on the slider and update the volume information
volumeSlider.addEventListener("input", function() {
video.volume = volumeSlider.value / 100;
updateVolume();
});

// Access the oldSchool class and add it to the video element
let oldSchoolClass = document.querySelector(".oldSchool");
oldSchoolClass.classList.add("video");

// Access the original class and remove it from the video element
let originalClass = document.querySelector(".original");
originalClass.classList.remove("video");