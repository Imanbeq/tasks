let btn = document.querySelector('.btn');
let notification = document.querySelector('.notification');

const showNotification = (options) => {
    notification.textContent = options.text;
    notification.classList.add(options.className);
    notification.classList.add('.d-block');

    setTimeout(()=>{
        notification.classList.remove('d-block');
    },1500 )
}

btn.addEventListener('click', () => {
    showNotification({text:'Вы успешно выполнили задачу', className: 'notification-primary'})
})