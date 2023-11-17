const container = document.querySelector('.buttonContainer');
const button = document.createElement('button');

button.textContent = 'Kliknij mnie';

container.append(button);

button.addEventListener('click', () => {
    alert('kliknięto')
})