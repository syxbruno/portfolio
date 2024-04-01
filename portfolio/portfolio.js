
window.addEventListener('scroll', function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 200);
});





let sunOrMoon = document.getElementById('sunOrMoon');

function trocarImg() {
    document.body.classList.toggle("tema-dark");
    if (document.body.classList.contains("tema-dark")) {
        sunOrMoon.src = "image/moon.png";
    } else {
        sunOrMoon.src = "image/sun.png";
    }
}





var links = document.querySelectorAll('#mylinkone, #mylinktwo, #mylinktree');

links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var href = this.getAttribute('href');
        showConfirmationModal(href);
    });
});

document.getElementById('confirmButton').addEventListener('click', function() {
    var href = document.getElementById('modal').getAttribute('data-href');
    window.open(href, '_blank');
    hideConfirmationModal();
});

document.getElementById('cancelButton').addEventListener('click', function() {
    hideConfirmationModal();
});

function showConfirmationModal(href) {
    document.getElementById('modal').setAttribute('data-href', href);
    document.getElementById('modal').style.display = 'block';
}

function hideConfirmationModal() {
    document.getElementById('modal').style.display = 'none';
}






function loading() {
    document.getElementById('loadingBody').style.display = "none";
    document.getElementById('beforeLoading').style.display = "block"
}





const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate({
        left: `${posX}px` ,
        top: `${posY}px`
    }, {duration: 400, fill: "forwards"})
}); 