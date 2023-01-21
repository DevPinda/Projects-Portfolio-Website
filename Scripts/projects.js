/**
 * @fileoverview This file contains the JavaScript code for the projects.html file.
 */

// Sets the custom cursor for all elements in the page
let custom_cursor = "url('Icons/resize_cursor.png'), auto";
let elements = document.querySelectorAll('*');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.cursor = custom_cursor;
}

document.addEventListener("mousemove", function(event) {
    if (event.clientX > 0 && event.clientX < window.innerWidth && event.clientY > 0 && event.clientY < window.innerHeight) {
        document.body.style.cursor = "url('Icons/resize_cursor.png'), auto";
    } else {
        document.body.style.cursor = "default";
    }
});

// Function which smooths the scrolling of the page
function smoothScroll(element) {
    /**
      * Declaration and initialisation of variables that dictate the duration of
      * the animation and the distance to scroll are set
    */
    let startTime = null;
    let startPosition = element.scrollTop;
    let endPosition = element.scrollHeight - element.clientHeight;
    let distance = endPosition - startPosition;

    // Function of the scrolling animation
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let elapsed = currentTime - startTime;
        let progress = elapsed / duration;
        element.scrollTop = startPosition + distance * progress;
        if (progress < 1) requestAnimationFrame(animation);
    }
    // Calls the animation function
    requestAnimationFrame(animation);
}

/**
 * Declaration and initialisation of variables that dictate the duration of
 * the animation and the locations of the cursor
 */
let cursor = document.getElementById("cursor");
let endX = 500;
let endY = 500;
let startTime;

//Function of the cursor animation
function animateCursor(timestamp) {
  if (!startTime) startTime = timestamp;
  let progress = timestamp - startTime;
  cursor.style.left = endX * (progress/duration) + "px";
  cursor.style.top = endY * (progress/duration) + "px";
  if (progress < duration) {
    requestAnimationFrame(animateCursor);
  }
}

// Calls the animation function
requestAnimationFrame(animateCursor);