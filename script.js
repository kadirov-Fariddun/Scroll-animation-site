// slider1 = new Swiper('.slider1', {
//     freeMode: true,
//     centeredSlides: true,
//     direction: 'vertical',
//     mousewheel: true,
//     slidesPerView: 1.75,
// });

document.querySelectorAll('.slider').forEach((item,index) => {
    window[`slider${index + 1}`] = new Swiper(item , {
    freeMode: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 1.75,
    slidesOffsetBefore: -125,
    })
});

bindSwipers(slider1,slider2,slider3,slider4);