
function criarCoracao() {
  const coracao = document.createElement('span');

  coracao.textContent = '♥';
  coracao.style.position = 'fixed';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.bottom = '-30px';
  coracao.style.color = '#ffb6d0';
  coracao.style.fontSize = (12 + Math.random() * 18) + 'px';
  coracao.style.opacity = '0.7';
  coracao.style.pointerEvents = 'none';
  coracao.style.zIndex = '2';

  document.body.appendChild(coracao);

  const duracao = 6000 + Math.random() * 4000;

  coracao.animate([
    { transform: 'translateY(0) rotate(0deg)', opacity: 0.7 },
    { transform: 'translateY(-110vh) rotate(40deg)', opacity: 0 }
  ], {
    duration: duracao,
    easing: 'linear'
  });

  setTimeout(() => coracao.remove(), duracao);
}

setInterval(criarCoracao, 600);
