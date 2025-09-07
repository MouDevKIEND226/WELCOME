const inputConnexion = document.getElementById('pwd-connexion');
const toggleConnexion = document.getElementById('toggle-connexion');

toggleConnexion.addEventListener('click', () => {
  if(inputConnexion.type === 'password') {
    inputConnexion.type = 'text';
    toggleConnexion.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    inputConnexion.type = 'password';
    toggleConnexion.classList.replace('fa-eye-slash', 'fa-eye');
  }
});

document.getElementById('form-connexion').addEventListener('submit', e => {
  e.preventDefault();
  alert('Connexion réussie (simulation) !');
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