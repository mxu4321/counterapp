
let add = document.getElementById('plus');
let clear = document.getElementById('reset');
let remove = document.getElementById('minus');
let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click',function(){
    integer += 1;
    int.innerHTML = integer;
})


clear.addEventListener('click', function(){
    integer = 0;
    int.innerHTML = integer;
})

remove.addEventListener('click',function(){
    integer -= 1;
    int.innerHTML = integer;
})


number.innerHTML = getCounterFromLocalStorage() || 0;
save.onclick = saveToLocalStorage;

function getCounterFromLocalStorage(){
    return localStorage.getItem('number');
}

function saveToLocalStorage() {
    localStorage.setItem('number', number.innerHTML);
}
