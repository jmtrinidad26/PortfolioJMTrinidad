document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    darkModeBtn.addEventListener('click', function() {
        //toggle sun and moon dark mode
        darkModeBtn.classList.toggle('clicked-image');
        //toggle dark mode class in css
        document.body.classList.toggle('dark-mode');	
    });	

});x    