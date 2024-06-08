document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    darkModeBtn.addEventListener('click', function() {
        //toggle sun and moon dark mode
        darkModeBtn.classList.toggle('clicked-image');
        //toggle dark mode class in css
        document.body.classList.toggle('dark-mode');	
    });	

});
function toggleReadMore() {
    var moreText = document.querySelector('.read-more');
    var showMoreBtn = document.querySelector('.show-more');

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        showMoreBtn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        showMoreBtn.textContent = "Read More";
    }
}    