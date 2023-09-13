document.querySelector('#WelcomeButton').addEventListener('click', function(event){
    event.preventDefault();
    alert(`hello user! Please choose your username!`);
    document.getElementById('蔡徐坤').classList.remove('hidden');
    document.getElementById('秀才').classList.remove('hidden');
    document.getElementById('大傻逼').classList.remove('hidden');
});

let message = document.querySelector('#message');
let name = "";
document.querySelector('#蔡徐坤').addEventListener('click', function(event){
    event.preventDefault();
    name = event.target.id;
    alert(`your username is ${name}`);
    document.getElementById('秀才').classList.toggle('hidden');
    document.getElementById('大傻逼').classList.toggle('hidden');
    message.innerHTML = `Welcome ${name}! Have a look around my webpage!`
});

document.querySelector('#秀才').addEventListener('click', function(event){
    event.preventDefault();
    name = event.target.id;
    alert(`your username is ${name}`)
    document.getElementById('蔡徐坤').classList.toggle('hidden');
    document.getElementById('大傻逼').classList.toggle('hidden');
    message.innerHTML = `Welcome ${name}! Have a look around my webpage!`
});

document.querySelector('#大傻逼').addEventListener('click', function(event){
    event.preventDefault();
    name = event.target.id;
    alert(`your username is ${name}`)
    document.getElementById('蔡徐坤').classList.toggle('hidden');
    document.getElementById('秀才').classList.toggle('hidden');
    message.innerHTML = `Welcome ${name}! Have a look around my webpage!`
});