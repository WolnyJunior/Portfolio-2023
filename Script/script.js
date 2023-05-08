// var i = 0;
// var txt = 'Sorin Junior';

// function typeWriter() {
//     if (i < txt.length) {
//         document.getElementById("nome").innerHTML += txt.charAt(i);
//         i++;
//     }
// }

// function iniciarTypeWriter(){
//     setInterval(typeWriter, 100)
// }
var cards = document.querySelectorAll('.cartao');

[...cards].forEach((cartao) => {
    cartao.addEventListener('click', function () {
        cartao.classList.toggle('flip');
    });
});