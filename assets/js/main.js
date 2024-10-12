document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // 引入头部组件
  fetch('/components/header.html')
    .then(response => response.text())
    .then(html => {
      app.innerHTML += html;
    });