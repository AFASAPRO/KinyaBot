//Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileNav.style.display === 'block';
        
        if (isOpen) {
            mobileNav.style.display = 'none';
            mobileMenuBtn.classList.remove('active');
        } else {
            mobileNav.style.display = 'block';
            mobileMenuBtn.classList.add('active');
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.style.display = 'none';
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mobileNav.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnMenuBtn && mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none';
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(245, 247, 250, 0.95)';
    } else {
        navbar.style.background = 'rgba(245, 247, 250, 0.8)';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Initialize page
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// FAQ accordion animation
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
  btn.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const toggle = this.querySelector('.faq-toggle');
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      toggle.textContent = '+';
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      toggle.textContent = '-';
    }
  });
});
    // Typing effect for 'Future'
    function typeFutureWord() {
      const el = document.querySelector('.typed-future');
      const word = 'Future';
      let i = 0;
      function type() {
        if (i <= word.length) {
          el.textContent = word.slice(0, i);
          i++;
          setTimeout(type, 120);
        } else {
          setTimeout(() => {
            el.textContent = '';
            i = 0;
            type();
          }, 1200);
        }
      }
      type();
    }
    document.addEventListener('DOMContentLoaded', typeFutureWord);

    // Hide loading page after window loads
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loading-page').style.opacity = '0';
    document.getElementById('loading-page').style.pointerEvents = 'none';
  }, 2500);
});



    // Typing effect for 'Future'
    function typeFutureAfasa() {
      const el = document.querySelector('.typed-afasa');
      const word = 'AFASA';
      let i = 0;
      function type() {
        if (i <= word.length) {
          el.textContent = word.slice(0, i);
          i++;
          setTimeout(type, 120);
        } else {
          setTimeout(() => {
            el.textContent = '';
            i = 0;
            type();
          }, 2000);
        }
      }
      type();
    }
    document.addEventListener('DOMContentLoaded', typeFutureAfasa);