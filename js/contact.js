document.addEventListener("DOMContentLoaded", function() {
    const popupLink = document.querySelector('.popup-link');
    const whatLink = document.querySelector('.what-link');
    const popup = document.querySelector('.popup');
    const popupImage = popup.querySelector('img');

    popupLink.addEventListener('click', function(e) {
        e.preventDefault();
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    whatLink.addEventListener('click', function(e) {
        e.preventDefault();
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    popup.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = 'initial';
    });
});
