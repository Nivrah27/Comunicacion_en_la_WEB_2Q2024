document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let index = 0;
    const intervalTime = 5000; 


    function showNext() {
        index = (index + 1) % totalItems;
        updateCarousel();
    }

    function showPrev() {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.next').addEventListener('click', showNext);
    document.querySelector('.prev').addEventListener('click', showPrev);

    setInterval(showNext, intervalTime);
});


document.addEventListener('DOMContentLoaded', function() {
    const appImage = document.querySelector('.app-image');

    appImage.addEventListener('mouseover', function() {
        appImage.style.transform = 'scale(1.05)';
    });

    appImage.addEventListener('mouseout', function() {
        appImage.style.transform = 'scale(1)';
    });
});
