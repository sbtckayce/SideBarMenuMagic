var listSideBar = document.querySelectorAll('.magic-nav-sidebar__item');

function activeListSideBar(){
    listSideBar.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
listSideBar.forEach((item)=>
item.addEventListener('click',activeListSideBar));





var menuToggle = document.querySelector('.toggle');
var navToggle =document.querySelector('.magic-nav-sidebar');
menuToggle.onclick =function(){
    menuToggle.classList.toggle('active');
    navToggle.classList.toggle('active');
}
