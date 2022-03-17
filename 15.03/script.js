const goods = [
    {
        name: 'Iphone 12',
        price: 790
    },
    {
        name: 'Iphone 12 pro',
        price: 800
    },
    {
        name: 'Iphone 12 pro max',
        price: 1050
    },
    {
        name: 'Iphone 13',
        price: 800
    },
    {
        name: 'Iphone 13 pro',
        price: 1000
    },
    {
        name: 'Iphone 13 pro max',
        price: 1200
    }

]

let filterPrice1 = goods.filter(item => item.price > 1000);
console.log(filterPrice1);

let filterPrice2 = goods.filter(item => item.price < 1000);
console.log(filterPrice2);
