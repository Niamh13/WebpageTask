const darkModeBtn = document.getElementById('darkmodeBtn');
const grayscaleBtn = document.getElementById('grayscaleBtn');
const defaultModeBtn = document.getElementById('defaultmodeBtn');
const body = document.body;
const submitBtn = document.getElementById('sendcontactBtn');


darkModeBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#424242';
    body.style.color = '#e8e8e8';
    body.style.filter = 'none';
});

grayscaleBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#f0f0f0';
    body.style.color = '#333';
    body.style.filter = 'grayscale(100%)';
});

defaultModeBtn.addEventListener('click', () => {
    body.style.backgroundColor = '';
    body.style.color = '';
    body.style.filter = 'none';
});

submitBtn.addEventListener('click', () => {
    let name = document.getElementById('full_name').innerHTML;
    let email = document.getElementById('email').innerHTML;
    alert('Hello, ' + name + '. Your email ' + email + ' has been added to the mailing list and the message has been sent.');
});

//function showContact(){
    const form = document.getElementById('formContact');
    const checkbox = document.getElementById('checkbox');

    if (checkbox.checked) {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
//}

document.getElementById("checkbox").addEventListener("change", function() {
      const form = document.getElementById("formContact");
      form.style.display = this.checked ? "block" : "none";
    });