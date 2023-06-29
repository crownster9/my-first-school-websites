

window.addEventListener('DOMContentLoaded',() => {
    const text ="TOPLINK COMPREHENSIVE COLLEGE"
    const span = document.querySelector('.typing-effect')
    
    let index = 0;
    
    const typeText = () =>{
        span.textContent = text.slice(0,index);
        index++
    
        if(index > text.length) {
            index = 0
        }
        setTimeout(typeText,400) 
       }
    typeText()
    }
    )


 const menuButton = document.getElementById('menu-button')
 const closeButton = document.getElementById('close-button')
 const sidebar = document.getElementById('sidebar')
 const navbar = document.querySelector('nav-bar')

 menuButton.addEventListener('click', () =>{
 sidebar.style.display = 'block'
 menuButton.style.display = 'none'
 
})
 closeButton.addEventListener('click', () =>{
sidebar.style.display = 'none'
menuButton.style.display = 'block'
})

const slides = document.querySelectorAll('.testimonial-slide')
let currentSlide = 0
function showSlide() {
    slides.forEach((slide,index) => {
        if(index === currentSlide) {
            slide.style.display ='block'
        }
        else{
            slide.style.display ='none'
        }
    })
    currentSlide = (currentSlide + 1) % slides.length
}
setInterval(showSlide,5000)

const abouts = document.querySelector('.abouts')
const about = document.querySelector('.about')
const abo = document.querySelector('.abo')
const fan = document.querySelector('.fan')
const horse = document.querySelector('.horse')
const nose = document.querySelector('.nose')
const hot = document.querySelector('.hot')
const others = document.querySelector('.others')
const other = document.querySelector('.other')
const come = document.querySelector('.come')

about.addEventListener('click', () =>{
    abo.classList.toggle('block')
    abo.classList.toggle('grid')
    abouts.classList.toggle('hidden')
    abo.classList.toggle('hidden')
   })
horse.addEventListener('click', () => {
    nose.classList.toggle('block')
    nose.classList.toggle('grid')
    hot.classList.toggle('hidden')
    nose.classList.toggle('hidden')
})
 others.addEventListener('click', () =>{
    come.classList.toggle('block')
    come.classList.toggle('grid')
    other.classList.toggle('hidden')
    come.classList.toggle('hidden')
   })
document.addEventListener('DOMContentLoaded',function(){
   function validateForm() {
    const fullName = document.getElementById('fullName').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message').value.trim()
    const validationMessage = document.getElementById('validationMessage')


    validationMessage.innerText =""
    validationMessage.classList.remove('text-red-500')
    validationMessage.classList.remove('text-green-500')
     document.getElementById('fullName').classList.remove('text-red-500')
     document.getElementById('email').classList.remove('text-red-500')
      document.getElementById('message').classList.remove('text-red-500')
       
      let isValid = true
   
      if(!fullName) {
      document.getElementById('fullName').classList.add('text-red-500')
        isValid = false 
      }
    
    
      if(!email) {
        document.getElementById('email').classList.add('text-red-500')
          isValid = false 
        }
        if(!message) {
            document.getElementById('message').classList.add('text-red-500')
              isValid = false 
            }

if(!isValid) {
    validationMessage.innerText ='Please fill in all fields.'
    validationMessage.classList.add('text-red-500')

}
else{
    validationMessage.innerText ='form submitted successfully..'
    validationMessage.classList.add('text-green-500')

}
}

})
const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
        item.classList.toggle('.blue')
    })
})
