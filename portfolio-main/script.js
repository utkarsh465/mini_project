(function() {
  const header = document.querySelector('.site-header');
  const menu = document.getElementById('primary-menu');
  const hamburger = document.querySelector('.hamburger');
  const year = document.getElementById('year');

  // Current year
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
      const isOpen = menu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
    // Close when clicking a link
    menu.addEventListener('click', function(event) {
      const target = event.target;
      if (target && target.matches('a[href^="#"]')) {
        menu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scrolling offset for fixed header
  document.addEventListener('click', function(event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#' || id === '#0') return;
    const targetEl = document.querySelector(id);
    if (!targetEl) return;
    event.preventDefault();
    const headerHeight = header ? header.offsetHeight : 0;
    const rect = targetEl.getBoundingClientRect();
    const offsetTop = window.pageYOffset + rect.top - headerHeight + 4;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });

  // Resume download analytics hook (no-op placeholder)
  const resumeLink = document.querySelector('.btn-resume');
  if (resumeLink) {
    resumeLink.addEventListener('click', function() {
      // Hook point for analytics if needed
    });
  }

  // Contact form validation and submission
  const form = document.getElementById('contact-form');
  if (form) {
    const statusEl = form.querySelector('.form-status');

    function setStatus(message, isError) {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.style.color = isError ? '#b91c1c' : '#065f46';
    }

    function showFieldError(field, message) {
      const small = form.querySelector(`.error[data-for="${field.id}"]`);
      if (small) small.textContent = message || '';
    }

    function clearErrors() {
      form.querySelectorAll('.error').forEach(function(el) { el.textContent = ''; });
    }

    function validate() {
      clearErrors();
      let valid = true;
      const name = form.name;
      const email = form.email;
      const message = form.message;
      if (!name.value.trim()) { showFieldError(name, 'Please enter your name'); valid = false; }
      const emailValue = email.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
      if (!emailOk) { showFieldError(email, 'Please enter a valid email'); valid = false; }
      if (!message.value.trim()) { showFieldError(message, 'Please enter a message'); valid = false; }
      return valid;
    }

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (!validate()) {
        setStatus('Please fix the highlighted fields.', true);
        return;
      }

      const endpoint = form.getAttribute('data-endpoint');
      if (!endpoint) {
        setStatus('Form endpoint is not configured.', true);
        return;
      }

      const formData = new FormData(form);
      setStatus('Sending…', false);
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      }).then(function(response) {
        if (response.ok) {
          form.reset();
          setStatus('Thanks! Your message has been sent.', false);
        } else {
          return response.json().then(function(data) {
            const message = (data && data.error) ? data.error : 'Something went wrong. Please try again later.';
            throw new Error(message);
          });
        }
      }).catch(function(error) {
        setStatus(error.message || 'Network error. Please try again later.', true);
      });
    });
  }
})();


