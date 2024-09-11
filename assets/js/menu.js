function Show_menu() {
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = 'assets/img/more.png';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = 'assets/img/delete.png';
    }
}