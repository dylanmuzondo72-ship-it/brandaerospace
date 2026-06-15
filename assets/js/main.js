
const navToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const params = new URLSearchParams(window.location.search);
const requestedService = params.get('service');
if (requestedService) {
  const serviceInput = document.querySelector('[name="service"]');
  if (serviceInput) serviceInput.value = requestedService;
}

const form = document.querySelector('#quoteForm');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const lines = [
      'Hello Brand Aerospace, I would like to request a quote.',
      '',
      `Name: ${data.get('name') || ''}`,
      `Company: ${data.get('company') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Service: ${data.get('service') || ''}`,
      `Project size / quantity: ${data.get('quantity') || ''}`,
      `Deadline: ${data.get('deadline') || ''}`,
      `Location: ${data.get('location') || ''}`,
      `Artwork / logo status: ${data.get('artwork') || ''}`,
      `Notes: ${data.get('notes') || ''}`,
    ];
    const message = encodeURIComponent(lines.join('\n'));
    const phone = '263779497943';
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank', 'noopener');
    const status = document.querySelector('#formStatus');
    if (status) status.textContent = 'Your quote request has been prepared in WhatsApp.';
  });
}
