let header = document.querySelector('.header-style');
let menu = document.querySelector('.menu');
let ul = document.querySelector('.ulstyle');
let div = document.querySelector('.div')
menu.addEventListener('click',function(){
    header.classList.toggle('changeHeaderBackground')
    ul.classList.toggle('changemenu')
    menu.style.display = 'none';
    let cross = document.createElement('i');
    cross.classList.add('fa-solid');
    cross.classList.add('fa-xmark');
    cross.classList.add('fa-2xl');
    cross.style.color = 'deeppink';
    cross.classList.add('cross');
    div.appendChild(cross);
    cross.addEventListener('click',function(){
        header.classList.toggle('changeHeaderBackground')
        ul.classList.toggle('changemenu')
        cross.classList.toggle('changecross')
        menu.style.display = 'block'
    })

})
