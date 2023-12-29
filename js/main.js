const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');
const contacts = document.querySelector('.header__contacts');
const burgerLine = document.querySelectorAll('span');
const btn = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const mmm = document.querySelector('.modal__window');
const svgCross = document.querySelectorAll('.svg-cross');
const modalResponse = document.querySelector('.response-modal');
function openBurger() {
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        navigation.style.right = 'calc(0% - 20px)';
        contacts.style.right = '0';
        burgerCross();
        if(!burger.classList.contains('active')){
            navigation.style.right = '-150%';
            contacts.style.right = '-150%';
            burgerDefault();
        }
    })
}
function burgerCross() {
    for(let elem in burgerLine) {
        if(elem <= burgerLine.length) {
            burgerLine[0].style.position = 'absolute';
            burgerLine[2].style.position = 'absolute';
            burgerLine[0].style.transform = 'rotate(45deg)';
            burgerLine[1].style.display = 'none';
            burgerLine[2].style.transform = 'rotate(-45deg)';
        }
    }
}
function burgerDefault() {
    for(let e in burgerLine) {
        if(e <= burgerLine.length) {
            burgerLine[0].style.position = 'relative';
            burgerLine[2].style.position = 'relative';
            burgerLine[0].style.transform = 'rotate(0deg)';
            burgerLine[1].style.display = 'inline-block';
            burgerLine[2].style.transform = 'rotate(0deg)';
        }
    }
}

openBurger();
// Modal window
function modalWindow() {
    for(let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', function(event) {
            event.preventDefault();
            if(btn[5] === event.target || btn[6] === event.target){
                modalResponse.style.display = 'block';
            }else{
                modal.style.display = 'block';
                modal.classList.toggle('active');
            }
        })
    }
    svgCross.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.closest('.modal')
            parent.style.display = 'none';
        })
    })
    if(modal.classList.contains('active')){
        console.log('rrr')
    }
}
modalWindow();
