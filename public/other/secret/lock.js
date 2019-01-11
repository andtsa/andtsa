var code = document.getElementById('lock').textContent;
var enter = document.getElementById('enter');

function redirect(page) {
    if (page == 'fr') {
        window.location.assign('https://andreas.aoneo.cc/secret/fr');
    }
}

enter.addEventListener('click', () => {
    redirect(document.getElementById('lock').textContent);
});