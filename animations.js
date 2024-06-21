document.addEventListener('DOMContentLoaded', () => {
    const curriculumButton = document.querySelector('.curriculum-button');

    curriculumButton.addEventListener('click', (event) => {
        event.preventDefault();
        const targetUrl = curriculumButton.getAttribute('data-url');

        // Page turning animation
        document.body.style.transition = "transform 0.6s";
        document.body.style.transform = "rotateY(-180deg)";

        // Delay navigation to allow the page turning animation to complete
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 600); // Adjust this delay as needed to match the animation duration
    });
});
