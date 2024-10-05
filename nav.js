function showsidebar(){
    const show=document.querySelector('.sidebar');
    // show.style.transition = '0.5s ease-out'
    show.style.display = 'flex';
}
function hide(){
    const hidden = document.querySelector('.sidebar');
    hidden.style.display = 'none';
}