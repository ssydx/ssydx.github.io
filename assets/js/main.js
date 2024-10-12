document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header-container');

  fetch('../components/header.html')
    .then(response => response.text())
    .then(html => {
      headerContainer.innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });
});