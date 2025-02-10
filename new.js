const box = document.getElementById('box'),
btns = document.getElementsByTagName('button'),
circles = document.getElementsByClassName('circle'),
hearts = document.querySelectorAll('.heart'),
oneHeart = document.querySelector('.heart'),
wrapper = document.querySelector('.wrapper')

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';





hearts.forEach(item => {
    item.style.backgroundColor = 'green'
})


// circles[0].remove();

// hearts[0].replaceWith(circles[0]);