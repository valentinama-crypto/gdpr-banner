document.addEventListener('DOMContentLoaded', function () {
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
  banner.innerHTML = "Questo sito utilizza cookie per migliorare l'esperienza utente. <button id='accept-cookies'>Accetto</button>";

  document.body.appendChild(banner);

  document.getElementById('accept-cookies').addEventListener('click', function () {
    banner.remove();
    localStorage.setItem('cookiesAccepted', 'true');
  });

  if (localStorage.getItem('cookiesAccepted') === 'true') {
    banner.remove();
  }
});
