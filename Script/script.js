var cards = document.querySelectorAll('.cartao');

[...cards].forEach((cartao) => {
    cartao.addEventListener('click', function () {
        cartao.classList.toggle('flip');
    });
});

function goToTop() {
    document.querySelector('.top').scrollIntoView({ behavior: 'smooth' });
  
    let isScrolling;
  
    const handleAutoScrollEnd = () => {
        window.clearTimeout(isScrolling);
  
        isScrolling = setTimeout(function() {
            document.querySelector('.go-to-top-btn').classList.add('invisible')
            window.removeEventListener('scroll', handleAutoScrollEnd);
        }, 66);
    };
  
    window.addEventListener('scroll', handleAutoScrollEnd, false);
  }
  
  document.addEventListener('scroll', () => {
    document.querySelector('.go-to-top-btn').classList.remove('invisible');
  })