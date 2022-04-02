const form = document.querySelector('form');

form.onsubmit = () => {
    let fullName = document.querySelector('input[type=text]');
    let phoneNumber = document.querySelector('input[type=number]');
    let birthDate = document.querySelector('input[type=date]');
    let gender = document.querySelector('input[type=radio]:checked');
    let langs = document.querySelectorAll('input[type=checkbox]:checked');
    let places = document.querySelector('select')

    let languages = [];
    langs.forEach((item) => {
        languages.push(item.value);
    })


    let data = {
        name: fullName.value,
        number: phoneNumber.value,
        birth: birthDate.value,
        genderDate: gender.value,
        lang: languages,
        branches: places.value
    }
    localStorage.setItem('userData', JSON.stringify(data));
}


