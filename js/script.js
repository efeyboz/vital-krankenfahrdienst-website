/* ============================================
   VITAL KRANKENFAHRDIENST - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  
  // ----- Mobile Menu Toggle -----
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking nav link
    document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
      });
    });
  }
  
  // ----- Mobile Dropdown Toggle -----
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = this.closest('.dropdown');
        parent.classList.toggle('open');
      }
    });
  });
  
  // ----- Header Scroll Effect -----
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // ----- FAQ Accordion -----
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
      const item = this.parentElement;
      const wasActive = item.classList.contains('active');
      
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      // Open clicked (if it wasn't open)
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
  
  // ----- Scroll Reveal Animation -----
  const revealElements = document.querySelectorAll('.reveal, .service-card, .testimonial, .process-item, .trust-item, .feature-list li');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });
  
  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
  
  // ----- Counter Animation -----
  const counters = document.querySelectorAll('.trust-number, .stat-number');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = counter.getAttribute('data-target');
        if (target) {
          const targetNum = parseInt(target);
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 1800;
          const steps = 60;
          const increment = targetNum / steps;
          let current = 0;
          
          const updateCounter = () => {
            current += increment;
            if (current < targetNum) {
              counter.textContent = Math.ceil(current).toLocaleString('de-DE') + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = targetNum.toLocaleString('de-DE') + suffix;
            }
          };
          
          updateCounter();
          counterObserver.unobserve(counter);
        }
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => counterObserver.observe(counter));
  
  // ----- Form Validation (Simple) -----
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('.form-submit, button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Wird gesendet...';
        submitBtn.disabled = true;
        
        // Simulate submission
        setTimeout(() => {
          submitBtn.innerHTML = '✓ Erfolgreich gesendet!';
          submitBtn.style.background = 'var(--success)';
          
          setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
          }, 3000);
        }, 1500);
      }
    });
  });
  
  // ----- Smooth Scroll for Anchor Links -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 100;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ----- Set Active Nav Link based on current page -----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
