document.addEventListener('DOMContentLoaded', function () {
  // Mostra il banner solo se i cookie non sono ancora stati accettati o rifiutati
  if (localStorage.getItem('cookiesAccepted') === 'true' || localStorage.getItem('cookiesAccepted') === 'false') return;

  const banner = document.createElement('div');
  banner.id = 'gdpr-banner';
  banner.style.position = 'fixed';
  banner.style.bottom = '0';
  banner.style.left = '0';
  banner.style.width = '100%';
  banner.style.background = '#222';
  banner.style.color = 'white';
  banner.style.padding = '15px';
  banner.style.textAlign = 'center';
  banner.style.zIndex = '1000';

  banner.innerHTML = `
    Questo sito utilizza cookie per migliorare l'esperienza utente.<br>
    <button id="accept-cookies">Accetto</button>
    <button id="reject-cookies">Rifiuto</button>
  `;

  document.body.appendChild(banner);

  // Accetta i cookie
  document.getElementById('accept-cookies').addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.remove();
  });

  // Rifiuta i cookie
  document.getElementById('reject-cookies').addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'false');
    banner.remove();
  });
});
