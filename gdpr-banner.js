document.addEventListener('DOMContentLoaded', function () {
  // Mostra il banner solo se non è stata ancora fatta una scelta
  if (localStorage.getItem('cookiesChoice')) return;

  const banner = document.createElement('div');
  banner.id = 'gdpr-banner';
  banner.style.position = 'fixed';
  banner.style.bottom = '0';
  banner.style.left = '0';
  banner.style.width = '100%';
  banner.style.background = '#000';
  banner.style.color = '#fff';
  banner.style.padding = '15px';
  banner.style.textAlign = 'center';
  banner.style.zIndex = '1000';

  banner.innerHTML = `
    Questo sito utilizza cookie per migliorare l'esperienza utente.
    <button id="accept-cookies" style="margin-left:10px">Accetto</button>
    <button id="reject-cookies" style="margin-left:10px">Rifiuto</button>
  `;

  document.body.appendChild(banner);

  document.getElementById('accept-cookies').addEventListener('click', function () {
    localStorage.setItem('cookiesChoice', 'accepted');
    banner.remove();
  });

  document.getElementById('reject-cookies').addEventListener('click', function () {
    localStorage.setItem('cookiesChoice', 'rejected');
    banner.remove();
  });
});

  });
});

