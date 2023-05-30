//--------------First Task-------------

let header = document.querySelector('.header-style');
let menu = document.querySelector('.menu');
let ul = document.querySelector('.ulstyle');

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
    header.appendChild(cross);
    cross.addEventListener('click',function(){
        header.classList.toggle('changeHeaderBackground')
        ul.classList.toggle('changemenu')
        cross.classList.toggle('changecross')
        menu.style.display = 'block'
    })

})

//--------------Second Task-------------
 let input = document.getElementById('input');
 let button = document.getElementById('button');
 let ullist = document.querySelector('.ullist');
 let clearAll = document.querySelector('.clearallbutton');
 let form = document.querySelector('.form');

 form.addEventListener('submit', function(x){
    x.preventDefault();
    let value = input.value;
    let list = document.createElement('li');
    list.classList.add('listyle');
    list.innerText = value;
    let trash = document.createElement('i');
    trash.classList.add('fa-regular');
    trash.classList.add('fa-trash-can');
    trash.classList.add('fa-xs');
    trash.style.color ='deeppink';
    ullist.appendChild(list);
    trash.addEventListener('click', function(){
        list.remove();
    })
    list.appendChild(trash)
    input.value = " ";

 })
 clearAll.addEventListener('click', function(){
    ullist.innerHTML = " ";
 })

