document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const tabLinks = document.querySelectorAll('.tab-link');
    const mainCharacterImage = document.getElementById('main-character-image');
    const characterName = document.getElementById('character-name');
    const characterDescription = document.getElementById('character-description');

    // Fade-in animation on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Character tab interaction
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const name = link.getAttribute('data-name');
            const description = link.getAttribute('data-description');
            const image = link.getAttribute('data-image');

            mainCharacterImage.src = image;
            characterName.textContent = name;
            characterDescription.textContent = description;

            tabLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
