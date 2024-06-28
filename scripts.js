document.addEventListener('DOMContentLoaded', () => {
    const characterCards = document.querySelectorAll('.character-card');
    const body = document.querySelector('body');

    // Character selection handling
    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'selected' class from all cards
            characterCards.forEach(c => c.classList.remove('selected'));

            // Add 'selected' class to the clicked card
            card.classList.add('selected');
        });
    });

    // Handle loading screen
    window.addEventListener('load', () => {
        body.classList.add('loaded');
    });
});
