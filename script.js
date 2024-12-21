gsap.from(".titlu h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5
});

gsap.from(".titlu h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1
});

const titlu = document.getElementById("arrow-down");
const initialPosition = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  const rect = titlu.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const distX = e.clientX - centerX;
  const distY = e.clientY - centerY;

  const distance = Math.sqrt(distX * distX + distY * distY);

  const radius =200;
  if (distance < radius) {
    const safeDistance = Math.max(distance, 1);

    const offsetX = -distX / safeDistance * (radius - distance + 1);
    const offsetY = -distY / safeDistance * (radius - distance + 1);

    gsap.to(titlu, {
      x: `+=${offsetX}`,
      y: `+=${offsetY}`,
      duration: 0.3,
      ease: "power1.out",
    });
  } else {
    gsap.to(titlu, {
      x: initialPosition.x,
      y: initialPosition.y,
      duration: 0.5,
      ease: "power1.out",
    });
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.scroll-img').forEach((img) => {
    gsap.fromTo(
        img,
        {
            scale: 0,
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            duration: 10,
            ease: 'circle.out',
            scrollTrigger: {
                trigger: img,
                start: 'top 75%',
                end: 'top 50%',
                scrub: true,
            },
        }
    );
});


