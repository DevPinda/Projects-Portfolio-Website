const button1 = document.getElementById('exitButton');
const button2 = document.getElementById('understandButton');
const div = document.getElementById('popupContainer');

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

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

function checkCookie(){
    var visitCookie = getCookie("visitCookie");
    if(visitCookie == null){
        div.style.display = 'flex';
        setCookie("visitCookie","true","");
    } else {
        div.style.display = 'none';
    }
}

checkCookie();
    
button1.addEventListener('click', () => {
    div.style.display = 'none';
});
    
button2.addEventListener('click', () => {
    div.style.display = 'none';
});