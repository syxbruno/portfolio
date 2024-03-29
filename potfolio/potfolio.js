
window.addEventListener('scroll', function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 200);
});




let sunOrMoon = document.getElementById('sunOrMoon');

sunOrMoon.onclick = function() {
    document.body.classList.toggle("tema-dark");
    if(document.body.classList.contains("tema-dark")) {
        sunOrMoon.src = "image/moon.png";
    } else {
        sunOrMoon.src = "image/sun.png"
    }
}



function loading() {
    document.getElementById('loadingBody').style.display = "none";
    document.getElementById('beforeLoading').style.display = "block"
}