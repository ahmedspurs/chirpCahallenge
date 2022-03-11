btn = document.querySelector('button.menu-button');
btn_close = document.querySelector('button.menu-close');
items = document.querySelector('.menu-items');

btn.addEventListener("click",function(){
    items.classList.toggle("hidden");
    this.classList.toggle("hidden");
    btn_close.classList.toggle("hidden");
});
btn_close.addEventListener("click",function(){
    items.classList.toggle("hidden");
    this.classList.toggle("hidden");
    btn.classList.toggle("hidden");
});