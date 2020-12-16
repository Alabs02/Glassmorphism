const glass = document.querySelector("#glass");

const tl = gsap.timeline({
    defaults: {ease: "power2.inOut", duration: 1.6}
});

tl.from('.abstract', { x: '-10%', opacity: 0 })
    .from('.card', { opacity: 0, delay: .5, duration: 1 }, "-=1.5")
    .from('.card', {x: "-10%", backdropFilter: 'blur(0px)' })
    .from('.seq', { y: '-30%', opacity: 0, stagger: .2, duration: .5 }, "-=.5")
    .from('h1', { y: 20, clipPath: 'inset(0 0 100% 0)' }, "-=.8")