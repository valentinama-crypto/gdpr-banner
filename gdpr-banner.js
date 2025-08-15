document.addEventListener('DOMContentLoaded', function () {
  const choice = localStorage.getItem('cookiesChoice');
  if (choice === 'accepted' || choice === 'declined') return;

  const banner = document.createElement('div');
  banner.id = 'gdpr-banner';
  banner.style.position = 'fixed';
  banner.style.bottom = '0';
  banner.style.left = '0';
  banner.style.width = '100%';
  banner.style.background = '#fff';
  banner.style.color = '#000';
  banner.style.padding = '15px';
  banner.style.borderTop = '1px solid #000';
  banner.style.display = 'flex';
  banner.style.flexDirection = 'column';
  banner.style.alignItems = 'center';
  banner.style.zIndex = '1000';

  banner.innerHTML = `
    <p style="margin: 0 0 10px 0; font-size: 15px;">
      Questo sito utilizza cookie per migliorare l'esperienza utente.
    </p>
    <div style="display: flex; gap: 10px;">
      <button id="accept-cookies" style="
        background: none;
        color: #000;
        border: 1px solid #000;
        padding: 6px 12px;
        cursor: pointer;
        font-size: 14px;
      ">Accetto</button>
      <button id="decline-cookies" style="
        background: none;
        color: #000;
        border: 1px solid #000;
        padding: 6px 12px;
        cursor: pointer;
        font-size: 14px;
      ">Rifiuto</button>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('accept-cookies').addEventListener('click', function () {
    localStorage.setItem('cookiesChoice', 'accepted');
    banner.remove();
  });

  document.getElementById('decline-cookies').addEventListener('click', function () {
    localStorage.setItem('cookiesChoice', 'declined');
    banner.remove();
  });
});

