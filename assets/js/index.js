document.addEventListener( 'DOMContentLoaded', function () {
    const tl = gsap.timeline()

    tl.from(".header", {y: -100, duration: 1.5, opacity: 0})
        .to(".header", {y: 0, ease: "elastic"})

    tl.from("#splide", {duration: 1, opacity: 0})

    new Splide( '#splide', {
        'cover'      : true,
        'heightRatio': 0.5,
        type   : 'loop',
        padding: {
            right: '5rem',
            left : '5rem',
        },
        autoplay: true,
        rewind: true
    }).mount()

    new Splide( '#tentang', {
        cover: true,
        heightRatio: .5,
        perPage: 2,
        type: 'loop',
        autoplay: true,
        rewind: true
    }).mount()
})
