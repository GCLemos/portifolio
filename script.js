// Select all sections
const sections = document.querySelectorAll('section');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const anchorLink = document.querySelector(`a[href="#${id}"]`);

    if (entry.isIntersecting) {
      anchorLink.classList.add('active');
    } else {
      anchorLink.classList.remove('active');
    }
  });
}, { threshold: 0.9 }); // Adjust the threshold according to your needs

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

// Existing code
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: "smooth"
    });
  });
});


