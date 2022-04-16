const btn = document.querySelector('#btn');

btn.onclick = (e) => {
    e.preventDefault();
    const elems = document.querySelectorAll('.elems');
    let x = 0;
    let data = {};
    for(let i = 0; i < elems.length; i++){
        data[elems[i].name] = elems[i].value;
        if(elems[i].value === ''){
            x++;
        }
    }
    if(x > 0){
        alert('Заполните все поля!');
    } else{
        console.log(data);
    }

}













