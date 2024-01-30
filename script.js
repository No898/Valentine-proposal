function showMessage(response) {
  let videoPlayed = false;
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set the button position to absolute
    noButton.style.position = "absolute";

    // Change the image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply the new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide the name message
    document.getElementById("question").textContent =
      "Choose wisely";
    document.getElementById("name").style.display = "none";

    // Add a mouseover event listener to the "No" button
    noButton.addEventListener("mouseover", () => {
      if (!videoPlayed) {
        const videoElement = document.createElement("video");
        videoElement.src = "./Maroon 5 - Sugar.mp4#t=42";
        videoElement.autoplay = true;
        videoElement.controls = false; // Optional: if you want to show video controls
        document.body.appendChild(videoElement);
        videoElement.style.position = "fixed";
        videoElement.style.top = "40%";
        videoElement.style.left = "50%";
        videoElement.style.transform = "translate(-50%, -50%)";
        videoElement.style.width = "700px"
        // videoElement.style.zIndex = 1000; // Ensure it's above other elements

        document.body.appendChild(videoElement);
        // Set the flag to true after playing the video
        videoPlayed = true;
      }

      // Generate new random coordinates when the button is hovered
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.zIndex = "100";
      // Apply new coordinates to the button, causing it to move
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
    });

    // Optional: You can also add a timeout to reset the position after a few seconds
  }

  if (response === "Yes") {
    // Remove the name message and the "No" button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.pause();
      videoElement.remove();
    }

    // Create an audio element to play the sound
    const audioElement = document.createElement("audio");
    audioElement.src = "./Minions Cheering.mp4"; // Source of the sound
    audioElement.preload = "auto"; // Preloading the audio
    audioElement.play() // Play the sound
      .catch(e => console.error("Audio playback failed:", e)); // Catch and log playback errors

    // Update the text content, display the message, and change the image to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "See you on the 14th my princess";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Remove the "Yes" button
    document.getElementById("yesButton").remove();
  }

}
