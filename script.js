const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const quoteForm = document.querySelector('#quoteForm');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const message = [
      'Hello Opuntia Global Inc., I would like to request a quotation.',
      '',
      `Name: ${data.get('name') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Project location: ${data.get('location') || ''}`,
      `Service needed: ${data.get('service') || ''}`,
      `Project details: ${data.get('details') || ''}`
    ].join('\n');

    const url = `https://wa.me/263715379413?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  });
}
