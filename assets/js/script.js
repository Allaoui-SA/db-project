document.querySelector('.plus').addEventListener('click', plus); 

function plus() {
    document.querySelector('.navigation-1').style.display = `none`;
    document.querySelector('.navigation-2').style.display = `block`;
}

document.querySelector('.moins').addEventListener('click', moins); 

function moins() {
    document.querySelector('.navigation-2').style.display = `none`;
    document.querySelector('.navigation-1').style.display = `block`;
}