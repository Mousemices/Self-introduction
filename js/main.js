window.addEventListener('load', function() {
    const title = document.querySelector('.title');
    title.classList.add('fade-in');
    title.style.top="0";
    title.style.opacity="1";

    const currentYear = new Date().getFullYear();
    const creator = document.querySelector('.creator');

    creator.append(currentYear);
});