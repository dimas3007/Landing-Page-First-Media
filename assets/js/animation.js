document.addEventListener( 'DOMContentLoaded', function () {
    const tl = gsap.timeline()
    tl.from(".header", {y: -100, duration: 1.5, opacity: 0})
        .to(".header", {y: 0, ease: "elastic"})

    tl.from("#splide", {duration: 1, opacity: 0})

    // Tentang
    const stTentang = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "bottom center",
            end: "center top",
            markers: true
        }
    });

    stTentang.from(".tentang-desc .img", {x: -100, opacity: 0, duration: 1})
    stTentang.from(".tentang-desc .desc", {x: 100, opacity: 0, duration: .5})
    stTentang.from(".unggulan-title", {y: 25, opacity: 0, duration: .5})
    stTentang.from(".unggulan-item", {y: 100, opacity: 0, duration: 1})

    // Harga
    const stHarga = gsap.timeline({
        scrollTrigger: {
            trigger: ".unggulan",
            start: "bottom center",
            end: "center top"
        }
    });
    stHarga.from(".harga-global .harga-title", {y: 25, opacity: 0, duration: .5})
    stHarga.from(".harga-global .paket", {y: 150, opacity: 0, duration: 1, delay: .5})

    const stHargaAttack = gsap.timeline({
        scrollTrigger: {
            trigger: ".harga-global",
            start: "bottom center",
            end: "center top"
        }
    });
    stHargaAttack.from(".harga-attack .harga-title", {y: 25, opacity: 0, duration: .5})
    stHargaAttack.from(".harga-attack .paket", {y: 150, opacity: 0, duration: 1, delay: .5})


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
