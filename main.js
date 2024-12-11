// Получаем элементы модального окна
var modal = document.getElementById("myModal");
var btns = document.getElementsByClassName("openModal");
var span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Открываем модальное окно при нажатии на любую кнопку
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        modal.style.display = "block";
    }
}

// Закрываем модальное окно при нажатии на (x)
span.onclick = function () {
    modal.style.display = "none";
}

// Закрываем модальное окно при нажатии вне его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function maskPhone(input) {
    input.value = input.value.replace(/[^+\d]/g, '').replace(/(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
}
const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    printData: function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const comment = document.getElementById('comment').value.trim();
    if (!name || !email || !comment) {
        alert('Пожалуйста, заполните поля имени, e-mail и комментария.');
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert('Поле телефона должно содержать только цифры.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Введите корректный e-mail.');
        return;
    }
    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;
    formData.printData();
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('myForm').reset();
}
document.getElementById('myForm').addEventListener('submit', submitForm);