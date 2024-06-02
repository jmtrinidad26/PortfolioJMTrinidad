document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    
    darkModeBtn.addEventListener('click', function() {
        darkModeBtn.classList.toggle('clicked-image');
        document.body.classList.toggle('dark-mode');

    });

   
});