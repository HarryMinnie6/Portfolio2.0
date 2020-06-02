console.log("ggg");

const hamburgerButton = document.querySelector('.hamburger-button')
const navbarLinks = document.querySelector('.nav-links')
//what happens when you click on the hamburger menu (mobile view)
hamburgerButton.addEventListener('click' , function (e) {
    navbarLinks.classList.toggle('active')
})


//Navigation bar disappears and re-appears on scroll//
let navigationBar = document.querySelector('.navigation-bar')
let lastScrollTop = 0

window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop > lastScrollTop) {
        navigationBar.style.top = '-70px'
    } else {
        navigationBar.style.top = '0'
    }
    lastScrollTop = scrollTop
})


// Form submission
const formSubMitBtn = document.querySelector('.form-control-submit-btn')
document.addEventListener('DOMContentLoaded',function() {
    formSubMitBtn.addEventListener('click', function(e) {
        
        console.log("sending");
        let email = document.querySelector('#email').value
        let name = document.querySelector('#email').value
        let message = document.querySelector('#email').value
        let status = document.querySelector('.status')
        let nameStatus = document.querySelector('.name-status')
        let emailStatus = document.querySelector('.email-status')
        let messageStatus = document.querySelector('.message-status')

        status.innerText=""
        
        if(name.length < 2){
            e.preventDefault()          
            nameStatus.append('Please enter your full name');
            status.appendChild(nameStatus)
        }
        if(email.length > 5 && email.includes('@') && email.includes('.')) {
                  
        } else {
            e.preventDefault()
            emailStatus.append('Please enter a valid email address');
            status.appendChild(emailStatus) 
            
        }
        if(message.length <= 2){
            e.preventDefault()
            messageStatus.append('Please enter a message');
            status.appendChild(messageStatus)
            
        }
        
    
    })

})