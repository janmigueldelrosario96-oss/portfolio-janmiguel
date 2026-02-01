/*==============MENU SHOW & HIDDEN =================*/

/*==============MENU SHOW =================*/
/* VALIDATE IF CONSTANT EXISTS */

/*============== REMOVE MENU MOBILE =================*/

/*============== REMOVE BACKGROUND HEADER =================*/

/*============== SCROLL SECTIONS ACTIVE LINK =================*/

/*============== SCROLL ABOUT ANIMATION =================*/
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".text-gradient").forEach((span) => {
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease:'none',
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
        },
    });
});
/*============== DARK LIGHT THEME =================*/

/*============== MIX IT UP FILTER PORTFOLIO =================*/

var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

/*============== active work =================*/

const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach((a)=> {
        a.classList.remove('active-work');
    });

    this.classList.add('active-work');
}

linkWork.forEach((a) => a / addEventListener('click', activeWork));

/*============== Email JS =================*/
const contactForm= document.getElementById('contact-form'),
contactName = document.getElementById('contact-name');
contactEmail = document.getElementById('contact-email');
contactMessage = document.getElementById('contact-message');
message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();
    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        contactMessage.value === '' 
    ) {
        message.textContent = 'Write all the input fields';

        setTimeout(() => {
            message.textContent = ''
        }, 3000);
    } else {
        emailjs.sendForm('Yservice_gz9f90u', 'template_cne9w7u', '#contact-form', 'EpO4Z25w5J3zUb8C8').then(
  () => {
    message.textContent = 'Message sent ✔'

    setTimeout(() => {
            message.textContent = ''
        }, 5000);
  },
  (error) => {
    alert('OOPs! SOMETHING WENT WRONG...', error);
  }
);

    contactName.value = '';
    contactEmail.value = '';
    contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);
