// update date in footer
const date = new Date(Date.now());
const year = new Intl.DateTimeFormat('default', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
}).format(date);
document.getElementById("date").innerText = year;