	//scrollup
   const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up')
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
   };
   window.addEventListener('scroll', scrollUp);
   
   //change background header
		const blurHeader = () => {
			const header = document.getElementById('header')
			this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
		}
		window.addEventListener('scroll', blurHeader);

      //email 
		const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-massage');

   const sendEmail = (e) => {
      e.preventDefault();
      // serviceID - templateID - #form - publicKey
      emailjs.sendForm('service_cvyb6jm', 'template_z4hgv98', '#contact-form', 'ZMPwEok5ABBA4iHG8')
         .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
               contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()

         }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
         })
   };
   contactForm.addEventListener('submit', sendEmail);

   // function sendMail() {
   //    let params = {
   //       name: document.getElementById("user_name").value,
   //       email: document.getElementById("user_email").value,
   //       message: document.getElementById("user_project").value
   //    }

   //    emailjs.send("service_cvyb6jm", "template_z4hgv98", params).then(alert("Email"))
   // }


   //scroll sections active link
		const sections = document.querySelectorAll('section[id]');

		const scrollActive = () => {
			const scrollY = window.pageYOffset;

			sections.forEach(current => {
				const sectionHeight = current.offsetHeight,
					sectionTop = current.offsetTop - 58,
					sectionId = current.getAttribute('id'),
					sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					sectionClass.classList.add('active-link')
				} else {
					sectionClass.classList.remove('active-link')
				}

			})
		}
		window.addEventListener('scroll', scrollActive);

      //scroll reveal animation
      const sr = ScrollReveal({
         origin: 'top',
         distance: '60px',
         duration: 2500,
         delay: 400,
         //reset: true //Animation repeat
      })
      sr.reveal(`.home__data, .home__social, .contact-block, .footer-container`);
      sr.reveal(`.home__image`, {origin: 'bottom'});
      sr.reveal(`.about__data, .skills__data`, {origin: 'left'});
      sr.reveal(`.about__image, .skills__content`, {origin: 'right'});
      sr.reveal(`.services__card, .projects__card`, {interval: 100});
