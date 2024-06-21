document.addEventListener('DOMContentLoaded', () => {
    const curriculumButtons = document.querySelectorAll('.curriculum-button');

    curriculumButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetUrl = button.getAttribute('data-url');

            // Smooth scrolling animation
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Delay navigation to allow the smooth scrolling animation to complete
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Adjust this delay as needed to match the animation duration
        });
    });
});
