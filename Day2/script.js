// gsap.from("#page1 #box1",{
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     ease: "esae"
// })
// gsap.from("#page2 #box1",{
//     opacity:0,
//     x:500,
//     duration:2,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:"#page2 #box1",
//         markers:true,
//         start:"top 80%",
//         end:"top 0%",
//         scrub:2,
//         pin:true
//     }

// })

gsap.to( "#page2  h1" ,{
    transform:"translateX(-250%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:false,
        start:"top 0%",
        end:"top -350%",
        scrub:2,
        pin:true,
    }

})

