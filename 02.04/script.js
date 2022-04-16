const btn = document.querySelector('#btn');
const name = document.querySelectorAll('.name');

btn.onclick = () => {
    name.forEach((item) => {
        if (item.value === ""){
            item.classList.add('error');
        }else{
            item.classList.add('allRight');
        }
    })


}



/*

btn.onclick = () => {

    let locStorage = {
        sName: surname.value,
        firstName: name.value,
        secondName: secondName.value,
        numberId: seriaId.value,
        numberInn: inn.value,
        date: giveDate.value
    }

    if(locStorage.sName === "", locStorage.firstName === "", locStorage.secondName === "", locStorage.numberId === "", locStorage.numberInn === "", locStorage.date === ""){
        surname.classList.add('error');
        name.classList.add('error');
        secondName.classList.add('error');
        seriaId.classList.add('error');
        inn.classList.add('error');
        giveDate.classList.add('error')
    } else {
        surname.classList.add('allRight');
        name.classList.add('allRight');
        secondName.classList.add('allRight');
        seriaId.classList.add('allRight');
        inn.classList.add('allRight');
        giveDate.classList.add('allRight');

        localStorage.setItem('storage', JSON.stringify(locStorage));
        window.location.href = 'form1.html';
    }
}
*/















