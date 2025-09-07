const inputPwd = document.getElementById('pwd');
const togglePwd = document.getElementById('toggle-inscription-pwd');
togglePwd.addEventListener('click', () => {
  if(inputPwd.type === 'password') {
    inputPwd.type = 'text';
    togglePwd.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    inputPwd.type = 'password';
    togglePwd.classList.replace('fa-eye-slash', 'fa-eye');
  }
});

const inputConfirm = document.getElementById('confirm-pwd');
const toggleConfirm = document.getElementById('toggle-inscription-confirm');
toggleConfirm.addEventListener('click', () => {
  if(inputConfirm.type === 'password') {
    inputConfirm.type = 'text';
    toggleConfirm.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    inputConfirm.type = 'password';
    toggleConfirm.classList.replace('fa-eye-slash', 'fa-eye');
  }
});

document.getElementById('form-inscription').addEventListener('submit', e => {
  e.preventDefault();
  alert('Inscription réussie (simulation) !');
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Écoute les clics sur le bouton
    themeToggleBtn.addEventListener('click', () => {
        // Bascule la classe 'dark-mode' sur la balise <body>
        body.classList.toggle('dark-mode');

        // Change l'icône entre la lune et le soleil
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.querySelector('i').classList.remove('fa-moon');
            themeToggleBtn.querySelector('i').classList.add('fa-sun');
        } else {
            themeToggleBtn.querySelector('i').classList.remove('fa-sun');
            themeToggleBtn.querySelector('i').classList.add('fa-moon');
        }
    });
});
