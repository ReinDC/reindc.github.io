document.addEventListener('DOMContentLoaded', function() {
    // Select all project cards
    const projectCards = Array.from(document.querySelectorAll('.home-card'));
    
    // Shuffle the array randomly
    projectCards.sort(() => Math.random() - 0.5);
    
    // Loop through the cards and hide those beyond the first three
    projectCards.forEach((card, index) => {
      if (index >= 4) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    });
  });