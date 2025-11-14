function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const msg = document.getElementById('login-msg');

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            msg.textContent = "ล็อกอินสำเร็จ!";
            document.querySelector('.login-box').style.display = 'none';
            document.getElementById('slip-box').style.display = 'block';
        })
        .catch(error => {
            msg.textContent = "ผิดพลาด: " + error.message;
        });
}

function changeBank() {
    const bank = document.getElementById('bank-select').value;
    const logo = document.getElementById('bank-logo');
    if(bank === 'ktb') logo.src = 'assets/logo-ktb.png';
    else if(bank === 'kbank') logo.src = 'assets/logo-kbank.png';
    else if(bank === 'krungsri') logo.src = 'assets/logo-krungsri.png';
}
