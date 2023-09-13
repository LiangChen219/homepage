let body = document.querySelector('body');
document.getElementById('orange').addEventListener('click', function(event){
    event.preventDefault();
    body.style.backgroundColor = '#e67e22';
});
document.getElementById('green').addEventListener('click', function(event){
    event.preventDefault();
    body.style.backgroundColor = '#27ae60';
});
document.getElementById('blue').addEventListener('click', function(event){
    event.preventDefault();
    body.style.backgroundColor = '#5f9fca';
});