// JavaScript to toggle the visibility of the menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('mobile-nav');
    var nav = document.getElementById('mobile-socials');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    this.classList.toggle('active');
});
