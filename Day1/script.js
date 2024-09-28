var tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
})

tl.from("h1",{
    duration: 1,
    y: -30,
    opacity: 0,
    ease: "power2.out",
    delay: 1,
})
tl.from("h2",{
    duration: 1,
    y: -30,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2,
})
