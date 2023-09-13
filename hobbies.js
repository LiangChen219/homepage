document.getElementById('submitAuthentication').addEventListener('click', function(event){
    event.preventDefault();
    let hobbies = document.getElementById('enterAuthentication').value;
    document.getElementById('hiddenSection').classList.remove('hidden');
    alert(`${hobbies}! That is a cool hobby to have!`);
    document.getElementById('authentication').classList.toggle('hidden');
    // document.getElementById('enterAuthentication').value = '';
});