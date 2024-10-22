// Navigera till startsidan vid klick på logotypen
document.getElementById('logo').addEventListener('click', function() {
    window.location.href = 'index.html';
});
 
// Formulärdatahantering och navigationslogik
document.addEventListener('DOMContentLoaded', () => {
    // Laddar sidan och lyssnar på formulärens händelser
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
 
    // Funktion för att navigera till specifik sida
    function navigate(page) {
        window.location.href = page;
    }
 
    // Skapa konto (simulerad)
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let user = {
                firstName: document.getElementById('first-name').value,
                lastName: document.getElementById('last-name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value
            };
            localStorage.setItem('user', JSON.stringify(user));
            alert('Konto skapat!');
            navigate('dashboard.html'); // Navigera till dashboard
        });
    }
 
    // Logga in (simulerad)
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let email = document.getElementById('login-email').value;
            let user = JSON.parse(localStorage.getItem('user'));
            if (user && user.email === email) {
                alert('Inloggad!');
                navigate('dashboard.html'); // Navigera till dashboard
            } else {
                alert('Felaktig e-postadress!');
            }
        });
    }
});
 