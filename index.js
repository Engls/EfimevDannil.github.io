let switchMode = document.getElementById("switchMode"); 
const savedTheme = localStorage.getItem('theme'); 

if (savedTheme) { 
    theme.href = savedTheme; 
} 
 
switchMode.onclick = function(){ 
    if (theme.getAttribute("href") === "web.css"){ 
        theme.href = "theme.css"; 
    } else { 
        theme.href = "web.css"; 
    } 
      
    localStorage.setItem('theme', theme.href); 
}

window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
}