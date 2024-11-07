const topMenu = document.getElementById('top-menu');
const toggleTopMenuIcon = document.getElementById('toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        //click on toggleTopMenuIcon

        topMenu.classList.toggle('top-menu-expanded');
        topMenu.classList.toggle('hidden');
    } else {
        //click outside toggleTopMenuIcon
        if (topMenu.classList.contains('top-menu-expanded')) {
            topMenu.classList.remove('top-menu-expanded');
            topMenu.classList.add('hidden');
        }
    }
});