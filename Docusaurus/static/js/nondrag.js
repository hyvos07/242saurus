document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.navbar__logo').getElementsByTagName('img')[0];

    if (logo) {
        logo.setAttribute('draggable', 'false');
        logo.setAttribute('oncontextmenu', 'return false;');
    }
});
