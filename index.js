let u = document.querySelector('.left-side-bar .btn.btn-state-inbox');
let v = document.querySelector('.list-group.nav .btn.btn-custom.btn-state-RNE');
let w = document.querySelector('.list-group.nav .btn.btn-custom.btn-state-AS');
let x = document.querySelector('.list-group.nav .btn.btn-custom.btn-state-CU');
let y = document.querySelector('.list-group.nav .btn.btn-custom.btn-state-FAQ');
let z = document.querySelector('.list-group.nav .btn.btn-custom.btn-state-SO');

console.log(y);
console.log(z);

document.addEventListener('readystatechange', () => console.log('State Change is ready!!!'));
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('readystatechange', () => console.log('State Change is ready!!!'));

    u.classList.add('btn-state-purple');
    v.classList.add('btn-state-grey');
    w.classList.add('btn-state-grey');
    x.classList.add('btn-state-grey');
    y.classList.add('btn-state-grey');
    z.classList.add('btn-state-purple');

});




// console.log(x);