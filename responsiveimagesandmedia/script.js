document.addEventListener('DOMContentLoaded', function () {
    var lazyImages = document.querySelectorAll('img[data-src]');

    function lazyLoadImage(image) {
        image.src = image.getAttribute('data-src');
        image.removeAttribute('data-src');
    }

    if ('IntersectionObserver' in window) {
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    lazyLoadImage(image);
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    }
});
