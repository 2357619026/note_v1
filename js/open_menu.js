(function Openmenu() {
    const menu = $('.menu-icon');
    const menuPanel = $('.menu-panel');
    let is_open = false;
    menu.click(() => {
        is_open = !is_open;
        const menuIcon = $('.menu-icon');
        if (is_open) {
            menuIcon.css('background-image', 'url(../img/svg/menu_white.svg)');
            menuPanel.css('width', '100%');
            is_open = true;
        } else {
            menuIcon.css('background-image', 'url(../img/svg/menu.svg)');
            menuPanel.css('width', '0');
            is_open = false;
        }
    })
})()

export default {}