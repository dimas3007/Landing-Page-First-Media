const tl = gsap.timeline()

tl.from(".header", {y: -100, duration: 1.5, opacity: 0,})
    .to(".header", {y: 0, ease: "elastic"})

tl.from(".hero-desc h1", {x: -400, duration: .5, opacity: 0,})
tl.from(".hero-desc p", {duration: .5, opacity: 0})
tl.from(".hero-desc button", {y: 400, opacity: 0})

tl.from(".hero-img img", {duration: 1, opacity: 0})
