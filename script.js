// Alert function for "Get Started" button
function showAlert() {
    alert('Thank you for your interest! Let’s get started.');
  }
  
  // Scroll to specific section smoothly
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  