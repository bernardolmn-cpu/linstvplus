document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-question');
    if (!button) return;

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach((faq) => {
        faq.classList.remove('open');
        faq.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const form = document.getElementById('leadForm');
  if (!form) return;

  const nameField = document.getElementById('name');
  const deviceField = document.getElementById('device');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;
    const formData = {
      name: nameField ? nameField.value.trim() : '',
      device: deviceField ? deviceField.value : ''
    };

    if (nameField && !formData.name) {
      nameField.closest('.form-group')?.classList.add('invalid');
      isValid = false;
    } else {
      nameField.closest('.form-group')?.classList.remove('invalid');
    }

    if (!deviceField || !formData.device) {
      deviceField?.closest('.form-group')?.classList.add('invalid');
      isValid = false;
    } else {
      deviceField.closest('.form-group')?.classList.remove('invalid');
    }

    if (!isValid) return;

    const message = encodeURIComponent(
      `Olá! Vim pelo site e quero ativar meu acesso.\n\nMeu Nome é: ${formData.name}\nMeu Aparelho é: ${formData.device}`
    );

    window.open(`https://wa.me/5586995145552?text=${message}`, '_blank', 'noopener');
    form.reset();
  });
});
