const animation = gsap.fromTo("h1",
{x:400, xPercent:0},
{x:0, xPercent: -100, duration:4, ease:"none",repeat: -1,
stagger:0.75}
)

// GSDevTools.create({animation:animation})