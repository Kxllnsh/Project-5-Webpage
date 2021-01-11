 var typed = new Typed('.new', {
    strings: [
        "YouTuber.", 
        "Programmer.", 
        "Freelancer.",
        "Gamer.",
],
    typeSpeed: 160,
    backSpeed: 50,
    loop: true,
});

//burger menu
var navList = document.getElementById('navBar')
navList.classList.add.zIndex = '-1'

    function menuBar(){
        navList.addEventListener('click', function() {
            navList.classList.add.display = ''
        })
    }


