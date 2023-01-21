/**
 * @fileoverview This file contains the JavaScript code for the index.html file.
 */

// Variables declaration and initialization for the Pop-up buttons and div container
const button1 = document.getElementById('exitButton');
const button2 = document.getElementById('understandButton');
const div = document.getElementById('popupContainer');

// Setter Function which creates a cookie with the name, value and expiration date
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Getter Function which returns the value of the cookie with the given name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

// Function which checks if the cookie with the name "visitCookie" exists
function checkCookie(){
    var visitCookie = getCookie("visitCookie");
    if(visitCookie == null){
        div.style.display = 'flex';
        setCookie("visitCookie","true","");
    } else {
        div.style.display = 'none';
    }
}

// Function call to check if the cookie exists
checkCookie();

// Event Listeners for the buttons
button1.addEventListener('click', () => {
    div.style.display = 'none';
});
    
button2.addEventListener('click', () => {
    div.style.display = 'none';
});





// Variables declaration and initialization for the progress bars
let secondContainer = document.getElementById('secondContainer');
let javaRect = document.getElementById('javaRect');
let csharpRect = document.getElementById('csharpRect');
let cppRect = document.getElementById('cppRect');
let phpRect = document.getElementById('phpRect');
let sqlRect = document.getElementById('sqlRect');
let javaSize = 0;
let csSize = 0;
let cppSize = 0;
let phpSize = 0;

// Event Listener for the progress bars
secondContainer.addEventListener("mouseover", function() {
    // Sets size values to 0
    javaSize = 0;
    csharpSize = 0;
    cppSize = 0;
    phpSize = 0;
    sqlSize = 0;
    
    // Recursive function which increases the size of the Java progress bar
    function increaseJavaSize() {
        if (javaSize < 80){
            javaSize += 0.5;
            javaRect.style.transform = "translate3d(0, 0, 0)";
            javaRect.style.background = `linear-gradient(90deg, #4944ff ${javaSize}%, transparent 0%) no-repeat`;
            setTimeout(increaseJavaSize, 1);
        }
    }
    increaseJavaSize();

    // Recursive function which increases the size of the C# progress bar
    function increaseCsSize() {
        if (csharpSize < 75){
            csharpSize += 0.5;
            csharpRect.style.transform = "translate3d(0, 0, 0)";
            csharpRect.style.background = `linear-gradient(90deg, #4944ff ${csharpSize}%, transparent 0%) no-repeat`;
            setTimeout(increaseCsSize, 1);
        }
    }
    increaseCsSize();

    // Recursive function which increases the size of the C++ progress bar
    function increaseCppSize() {
        if (cppSize < 35){
            cppSize += 0.5;
            cppRect.style.transform = "translate3d(0, 0, 0)";
            cppRect.style.background = `linear-gradient(90deg, #4944ff ${cppSize}%, transparent 0%) no-repeat`;
            setTimeout(increaseCppSize, 1);
        }
    }
    increaseCppSize();

    // Recursive function which increases the size of the PHP progress bar
    function increasePhpSize() {
        if (phpSize < 55){
            phpSize += 0.5;
            phpRect.style.transform = "translate3d(0, 0, 0)";
            phpRect.style.background = `linear-gradient(90deg, #4944ff ${phpSize}%, transparent 0%) no-repeat`;
            setTimeout(increasePhpSize, 1);
        }
    }
    increasePhpSize();

    // Recursive function which increases the size of the SQL progress bar
    function increaseSqlSize() {
        if (sqlSize < 55){
            sqlSize += 0.5;
            sqlRect.style.transform = "translate3d(0, 0, 0)";
            sqlRect.style.background = `linear-gradient(90deg, #4944ff ${sqlSize}%, transparent 0%) no-repeat`;
            setTimeout(increaseSqlSize, 1);
        }
    }
    increaseSqlSize();
});





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