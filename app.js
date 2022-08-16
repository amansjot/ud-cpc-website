// update date in footer

let dateDiv = document.getElementById("date");

setInterval(function update() {
    let date = new Date(Date.now());
    let format = new Intl.DateTimeFormat('default', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(date);
    dateDiv.innerText = format;
    return update;
}(), 1000);

// Remove hash from URL on reload

history.replaceState(null, null, ' ');

// Toggle class 'open' on navigation links

window.addEventListener('load', function() {

    const navLinks = document.querySelectorAll('#navigation > a');

    function toggleOpen() {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.toggle('open');
        }
    }

    document.getElementById('hamburger').addEventListener('click', toggleOpen);

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', toggleOpen);
    }
});

// Toggle open section

function goTo(id) {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(id).classList.add("active");
}