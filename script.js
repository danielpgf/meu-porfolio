
const elementosFade = document.querySelectorAll('.fade-in');


const observadorFade = new IntersectionObserver(function(entradas) {
  entradas.forEach(function(entrada) {

    if (entrada.isIntersecting) {

      entrada.target.classList.add('visivel');
    }
  });
}, {

});

elementosFade.forEach(function(el) {
  observadorFade.observe(el);
});




const botoesFiltro = document.querySelectorAll('.filtro');
const cards        = document.querySelectorAll('.card');
const semResultados = document.getElementById('sem-resultados');

if (botoesFiltro.length > 0) {

  botoesFiltro.forEach(function(botao) {
    botao.addEventListener('click', function() {


      botoesFiltro.forEach(function(b) {
        b.classList.remove('ativo');
      });


      botao.classList.add('ativo');


      const categoria = botao.dataset.categoria;
      let visiveis = 0;

      cards.forEach(function(card) {
        const bate = categoria === 'todos' || card.dataset.categoria === categoria;

        if (bate) {
          card.style.display = '';  
          visiveis++;
        } else {
          card.style.display = 'none'; 
        }
      });

      
      if (semResultados) {
        semResultados.style.display = visiveis === 0 ? 'block' : 'none';
      }

    });
  });

}



const secoes   = document.querySelectorAll('section[id]');
const linksNav = document.querySelectorAll('.nav-links a');

if (secoes.length > 0) {

  const observadorNav = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
      if (entrada.isIntersecting) {

        linksNav.forEach(function(link) {
          
          link.classList.remove('ativo');

          
          if (link.getAttribute('href') === '#' + entrada.target.id) {
            link.classList.add('ativo');
          }
        });

      }
    });
  }, { threshold: 0.4 });

  secoes.forEach(function(secao) {
    observadorNav.observe(secao);
  });

}
