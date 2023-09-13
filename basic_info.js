document.getElementById('submitAuthentication').addEventListener('click', function(event){
    event.preventDefault();
    let username = document.getElementById('enterAuthentication').value;
    document.getElementById('hiddenSection').classList.remove('hidden');
    alert(`hello ${username}! This is my basic information!`);
    document.getElementById('authentication').classList.toggle('hidden');
    document.getElementById('enterAuthentication').value = '';
});