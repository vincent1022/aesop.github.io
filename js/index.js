var swiper = new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination',
    },

    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
    }
});

window.onload = function () {
    lax.setup() // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}   