document.getElementById('submitAuthentication').addEventListener('click', function(event){
    event.preventDefault();
    let food = document.getElementById('enterAuthentication').value;
    alert(`oh ${food}! That is delicious!`);
    document.getElementById('hiddenSection').classList.remove('hidden');
    document.getElementById('authentication').classList.toggle('hidden');
})