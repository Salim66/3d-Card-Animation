//Moving Animation to Happen
const crud = document.querySelector('.crud');
//Items
const sneaker = document.querySelector('.sneaker img');
const namen = document.querySelector('.name');
const state = document.querySelector('.location');
const job = document.querySelector('.job');
const feedback = document.querySelector('.feedback');
const skils = document.querySelector('.skils');
const option = document.querySelector('.option'); 

//Animation Event Listener
crud.addEventListener('mousemove', e => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    const yAxis = (window.innerHeight / 2 - e.pageY) /20;
    crud.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
crud.addEventListener('mouseenter', e => {
    crud.style.transition = `none`;
    sneaker.style.transform = `translateZ(200px)`;
    namen.style.transform = `translateZ(150px)`;
    state.style.transform = ` translateZ(135px)`;
    job.style.transform = `translateZ(125px)`;
    feedback.style.transform = `translateZ(100px)`;
    skils.style.transform = `translateZ(75px)`;
    option.style.transform = `translateZ(75px)`;
});

//Animate Out
crud.addEventListener('mouseleave', e => {
    crud.style.transition = `all 0.5s ease`;
    crud.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.style.transform = `translateZ(0px)`;
    namen.style.transform = `translateZ(0px)`;
    state.style.transform = ` translateZ(0px)`;
    job.style.transform = `translateZ(0px)`;
    feedback.style.transform = `translateZ(0px)`;
    skils.style.transform = `translateZ(0px)`;
    option.style.transform = `translateZ(0px)`;
});