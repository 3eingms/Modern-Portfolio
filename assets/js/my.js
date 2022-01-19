const hide = document.querySelector('.active');
const skill = document.querySelector('#skills')
const hideMenu = () =>{
    
    skill.classList.remove('.active')
}


skill.addEventListener('click',hideMenu)