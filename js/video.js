var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log ("Autoplay is set to" + video.autoplay)
	console.log ("Loop is set to" + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	var video = document.querySelector("video");
	video.play();
	console.log("Play Video")
	console.log("Current volume: " + video.volume)
});

document.querySelector("#pause").addEventListener("click", function() {
	var video = document.querySelector("video");
	video.pause();
	console.log("Pause Video")
  });

document.querySelector("#slower").addEventListener("click", function() {
	var video = document.querySelector("video");
	video.playbackRate -= 0.1;
	console.log("New speed is set to " +video.playbackRate)
  });

document.querySelector("#faster").addEventListener("click", function() {
	var video = document.querySelector("video");
	video.playbackRate += 0.1;
	console.log("New speed is set to " +video.playbackRate)
  });
  
document.querySelector("#skip").addEventListener("click", function() {
	var video = document.querySelector("video");
	var newTime = video.currentTime + 10;
	if (newTime < video.duration) {
		video.currentTime = newTime;
	} else {
		video.currentTime = 0;
	}
	console.log("The video is currently at " +video.currentTime);
  });

document.querySelector("#mute").addEventListener("click", function() {
	var video = document.querySelector("video");
	video.muted = !video.muted;
	var muteButton = document.querySelector("#mute");
	muteButton.textContent = video.muted ? "Unmute" : "Mute"
	console.log("The video is muted " +video.muted);
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("volume").textContent = "100%";
    document.querySelector("#slider").addEventListener("input", function(e) {
        var video = document.querySelector("video");
        var volumeValue = e.target.value;
        video.volume =
		volumeValue / 100;
        document.getElementById("volume").textContent = volumeValue + "%"; // Update the volume span content
        console.log("New volume: " + video.volume);
    });
});

document.querySelector("#vintage").addEventListener("click", function() {
	var video = document.querySelector("video");
	video.classList.add("oldSchool");
	console.log("The video is in OLd School mode")
  });

document.querySelector("#orig").addEventListener("click", function() {
	var video = document.querySelector("video");
	video.classList.remove("oldSchool");
	console.log("The video is no longer in OLd School mode")
});
