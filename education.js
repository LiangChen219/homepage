document.getElementById('submitAuthentication').addEventListener('click', function(event){
    event.preventDefault();
    let school = document.getElementById('enterAuthentication').value;
    document.getElementById('hiddenSection').classList.remove('hidden');
    alert(`So you study at ${school}, I go to SHSB`);
    document.getElementById('authentication').classList.toggle('hidden');
    document.getElementById('enterAuthentication').value = '';
});